import bcryptjs from "bcryptjs";
import Farmer from "../models/farmer.models.js";
import Warehouse from "../models/warehouse.model.js";
import { errorHandler } from "../utils/error.js";
import CropSaleListing from "../models/cropSaleListingSchema.js";
import mongoose from "mongoose";
import Transaction from "../models/transactionSchema.js";

export const createTransaction = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const {
      cropSaleListing: cropSaleListingId,
      buyer,
      seller,
      quantityRequired:quantityPurchased,
      totalCost,
    } = req.body;
    console.log(req.body);
    let newTransaction, warehouse;

    // let cropSaleListingDoc = await CropSaleListing.findById(cropSaleListingId).session(session);

    // console.log(typeof cropSaleListingId, cropSaleListingId,"---------------------------------",cropSaleListingDoc);

    // Step 1: Fetch CropSaleListing

    let cropSaleListingDoc = await CropSaleListing.findById(
      cropSaleListingId
    ).session(session);
    console.log(
      typeof cropSaleListingId,
      cropSaleListingId,
      "---------------------------------",
      cropSaleListingDoc
    );
    if (!cropSaleListingDoc) {
      throw new Error("Crop sale listing not found.");
    }

    // Step 2: Create the Transaction

    console.log("Inloop");
    newTransaction = new Transaction({
      cropSaleListing: cropSaleListingId,
      buyer: buyer,
      seller: seller,
      quantityPurchased,
      totalCost,
    });

    console.log("Saving:", newTransaction);
    await newTransaction.save({ session });

    // Step 3: Update Warehouse

    console.log("cropSaleListingDoc:", cropSaleListingDoc);


    warehouse = await Warehouse.findById(buyer).session(session);
console.log(session);
    const cropIndex = warehouse.warehouseDetails.cropDetails.findIndex(
      (crop) => crop.cropName === cropSaleListingDoc.cropName
      );
      console.log(cropIndex);
      if (cropIndex > -1) {
        warehouse.warehouseDetails.cropDetails[cropIndex].cropQuantity +=
        quantityPurchased;
      } else {
        warehouse.warehouseDetails.cropDetails.push({
          cropName: cropSaleListingDoc.cropName,
          cropQuantity: quantityPurchased,
        });
      }
      console.log("Saving warehouse:",warehouse);

      warehouse.markModified('warehouseDetails.cropDetails');
      await warehouse.save({ session });
      console.log("Updated warehouse details:", warehouse.warehouseDetails.cropDetails);
      

    // Step 4: Update CropSaleListing
    cropSaleListingDoc.quantity -= quantityPurchased;
    if (cropSaleListingDoc.quantity === 0) {
      cropSaleListingDoc.status = "sold";
    }
    
    await cropSaleListingDoc.save({ session });

    // Commit transaction if all steps succeed
    await session.commitTransaction();
    res.status(200).json(newTransaction);
  } catch (error) {
    console.log(error);
    await session.abortTransaction();
    res.status(500).json({ error: error.message });
  } finally {
    // End the session
    session.endSession();
  }
};


export const getAllTransactions = async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch transactions where 'userId' is either the buyer or seller
    const transactions = await Transaction.find({
      $or: [{ buyer: userId }, { seller: userId }]
    });

    // Enrich each transaction with details of the other party
    const enrichedTransactions = await Promise.all(transactions.map(async (transaction) => {
      const isBuyer = transaction.buyer.toString() === userId;
      const otherUserId = isBuyer ? transaction.seller : transaction.buyer;

      // Attempt to fetch the other party as a Farmer
      let otherParty = await Farmer.findById(otherUserId).lean();

      // If not found as a Farmer, attempt to fetch as a Warehouse Owner
      if (!otherParty) {
        otherParty = await Warehouse.findById(otherUserId).lean();
      }

      const cropSaleListing = await CropSaleListing.findById(transaction.cropSaleListing).lean();

      const otherPartyRole = otherParty.usertype;

      return {
        ...transaction.toObject(), 
        otherParty: {
          id: otherParty._id,
          name: otherParty.name || otherParty.username, 
          role: otherPartyRole,
          email : otherParty.email, 

        },
        cropSaleListing: {
          cropName: cropSaleListing.cropName,
          cropType: cropSaleListing.cropType,
          quantity: cropSaleListing.quantity,
          pricePerKg: cropSaleListing.pricePerKg,
          totalPrice: cropSaleListing.totalPrice,
          availableInDays: cropSaleListing.availableInDays,
          location: cropSaleListing.location,
          status: cropSaleListing.status,
        }
      };
    }));

    // console.log(enrichedTransactions, "_____________________________________________");
    res.status(200).json(enrichedTransactions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve transaction details', error: error.message });
  }
};
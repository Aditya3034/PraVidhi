import bcryptjs from "bcryptjs";
import Farmer from "../models/farmer.models.js";
import { errorHandler } from "../utils/error.js";
import CropSaleListing from "../models/cropSaleListingSchema.js";


export const test = (req, res) => {
  res.json({
    message: "HELLO WORLD",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await Farmer.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your own account!"));
  try {
    await Farmer.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getUserListin = async (req, res, next) => {
  // if (req.user.id === req.params.id) {
  //   try {
  //     const listings = await Listing.find({ userRef: req.params.id });
  //     res.status(200).json(listings);
  //   } catch (error) {
  //     next(error);
  //   }
  // } else {
  //   return next(errorHandler(401, "You can only view your own listings"));
  // }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await Farmer.findById(req.params.id);

    if (!user) return next(errorHandler(404, "User Not founde"));

    const { password: pass, ...rest } = user._doc;

    res(200).json(rest);
  } catch (error) {
    next(error);
  }
};


export const updateCropInfo = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const newCropInfo = req.body.cropInfo; // This is the array of new crops info

    const farmer = await Farmer.findById(userId);

    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }

    // Assuming newCropInfo is an array of { cropName, cropQty }
    newCropInfo.forEach(newCrop => {
      const existingCropIndex = farmer.cropInfo.findIndex(c => c.cropName === newCrop.cropName);
      
      if (existingCropIndex > -1) {
        // Update quantity if crop already exists
        farmer.cropInfo[existingCropIndex].cropQty += newCrop.cropQty;
      } else {
        // Push new crop info if it doesn't exist
        farmer.cropInfo.push(newCrop);
      }
    });

    await farmer.save(); // Save the updated farmer document

    res.status(200).json(farmer);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getCropInfo = async (req, res, next) => {
  try {

    const userId = req.params.id;
    console.log(userId);
    const farmer = await Farmer.findById(userId);

    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    
    const cropInfo = farmer.cropInfo;

    return res.status(200).json(cropInfo);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Data can't be fetched" });

  }
};


// Method to handle sell request
export const createSellRequest = async (req, res) => {
  
  const farmerId = req.params.id;

  console.log(farmerId);

  // Extract details from request body
  const { cropName,cropType, quantity, pricePerKg, availableInDays, location, totalPrice} = req.body;
  console.log(req.body);

  try {

    // Create new CropSaleListing document
    const newListing = await CropSaleListing.create({
      farmer: farmerId,
      cropName,
      cropType,
      quantity,
      pricePerKg,
      totalPrice,
      availableInDays,
      location,
    });


    // console.log(newListing);

    // Update farmer's crop quantity
    const farmer = await Farmer.findById(farmerId);
    // console.log(farmer, "FARMER____________________________________");
    const cropIndex = farmer.cropInfo.findIndex(crop => crop.cropName === cropName);
// console.log(cropIndex, "CROPDATA____________________________________");
    if (cropIndex !== -1) {
      // If crop exists, deduct the quantity
      farmer.cropInfo[cropIndex].cropQty -= quantity;
      await farmer.save();
    } else {
      // Handle case where crop doesn't exist (this should be managed based on your app logic)
      return res.status(400).json({ message: "Crop not found." });
    }

    // Successfully processed sell request
    res.status(201).json({ message: "Sell request processed successfully", listing: newListing });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to process sell request", error: error.toString() });
  }
};
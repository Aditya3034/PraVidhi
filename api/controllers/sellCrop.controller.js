import bcryptjs from "bcryptjs";
import Farmer from "../models/farmer.models.js";
import { errorHandler } from "../utils/error.js";
import CropSaleListing from "../models/cropSaleListingSchema.js";


export const getAllCropSaleListing = async  (req, res, next) => {
    
    try {
        
        const listings = await CropSaleListing.find({}).populate('farmer'); // Assuming you want to include the farmer's name with each listing
        res.status(200).json(listings);
        // console.log(listings);
    } catch (error) {
        console.log(error);
    }

  };
  
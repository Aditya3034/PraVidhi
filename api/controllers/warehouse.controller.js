import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import Warehouse from "../models/warehouse.model.js";


export const getWarehouseDetails = async (req, res, next) => {
    const { userId } = req.params;

    try {
        // Find the warehouse owner by ID
        const warehouseOwner = await Warehouse.findById(userId);
    
        if (!warehouseOwner) {
            return res.status(404).json({ message: 'Warehouse owner not found' });
        }

        // Check if the warehouse details exist
        if (!warehouseOwner.warehouseDetails) {
            return res.status(404).json({ message: 'Warehouse details not found for this owner' });
        }

        // Send the warehouse details
        return res.status(200).json(warehouseOwner.warehouseDetails);
        
    } catch (error) {
        return res.status(500).json({ message: 'Failed to retrieve warehouse details', error: error.message });
    }
};




// Controller to add or update warehouse details
export const addOrUpdateWarehouseDetails = async (req, res) => {
    const { userId } = req.params;
    const { warehouseName, warehouseTotalStorage, cropDetails } = req.body; 
    // console.log( warehouseName, warehouseTotalStorage, cropDetails);
    try {
        // Find the warehouse owner by ID
        const warehouseOwner = await Warehouse.findById(userId);

        if (!warehouseOwner) {
            return res.status(404).json({ message: 'Warehouse owner not found' });
        }

        // Check if warehouse details exist and create or update accordingly
        if (warehouseOwner.warehouseDetails) {
            warehouseOwner.warehouseDetails.warehouseName = warehouseName;
            warehouseOwner.warehouseDetails.warehouseTotalStorage = warehouseTotalStorage;
            warehouseOwner.warehouseDetails.cropDetails = cropDetails; 
        } else {
            // Set new warehouse details if not exist
            warehouseOwner.warehouseDetails = { warehouseName, warehouseTotalStorage, cropDetails };
        }

        await warehouseOwner.save();

        res.status(200).json({ message: 'Warehouse details updated successfully', data: warehouseOwner });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update warehouse details', error: error.message });
    }
};

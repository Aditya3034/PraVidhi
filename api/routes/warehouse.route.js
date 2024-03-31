import express from "express";

import { verifyToken } from '../utils/verifyUser.js';
import { addOrUpdateWarehouseDetails, getWarehouseDetails } from "../controllers/warehouse.controller.js";




const router = express.Router();

router.get('/warehouseDetails/:userId', getWarehouseDetails, verifyToken)
router.put('/warehouseDetails/:userId', addOrUpdateWarehouseDetails, verifyToken);


export default router;
import express from "express";
import { test,updateUser, deleteUser, getUserListin, getUser, updateCropInfo, getCropInfo, createSellRequest } from "../controllers/farmer.controlle.js";
import { verifyToken } from '../utils/verifyUser.js';
import { createTransaction, getAllTransactions } from "../controllers/transaction.controller.js";



const router = express.Router();


router.post('/:id/buy-request', createTransaction, verifyToken);
router.get('/:userId/getAllTransactions', getAllTransactions, verifyToken);

export default router;
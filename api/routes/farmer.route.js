import express from "express";
import { test,updateUser, deleteUser, getUserListin, getUser, updateCropInfo, getCropInfo, createSellRequest } from "../controllers/farmer.controlle.js";
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();


router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListin)
router.get('/:id', verifyToken, getUser)
router.put('/:id/cropinfo', verifyToken, updateCropInfo )
router.get('/getCropInfo/:id', verifyToken, getCropInfo)

router.post('/:id/sell-request', verifyToken, createSellRequest);

export default router;
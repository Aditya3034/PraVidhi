import express from "express";
import { test,updateUser, deleteUser, getUserListin, getUser, updateCropInfo } from "../controllers/farmer.controlle.js";
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();


router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListin)
router.get('/:id', verifyToken, getUser)
router.get('/:id/cropinfo', verifyToken, updateCropInfo )


export default router;
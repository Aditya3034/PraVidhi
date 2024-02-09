import express from 'express';
import { google, signin, signup,signout, warehousesignup, warehousesignin } from '../controllers/auth.controller.js';
const router = express.Router();


router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signout);

router.post("/warehousesignup",warehousesignup);
router.post("/warehousesignin", warehousesignin)

export default router;
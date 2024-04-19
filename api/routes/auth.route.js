import express from 'express';
import { google, signin, signup,signout, warehousesignup, warehousesignin, retailorsSignUp, retailorSignIn } from '../controllers/auth.controller.js';
const router = express.Router();


router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signout);

router.post("/warehousesignup",warehousesignup);
router.post("/warehousesignin", warehousesignin);


router.post("/retailor-signUp", retailorsSignUp);
router.post("/retailor-signIn", retailorSignIn);


export default router;
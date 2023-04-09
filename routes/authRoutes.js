import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/authController.js";

const router = express.Router();


router.route('/auth/register').post(registerUser);

router.route('/auth/login').post(loginUser);

router.route('/auth/logout').get(logoutUser);





export default router;

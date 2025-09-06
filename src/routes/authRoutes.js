import express from "express";
import { studentRegister, studentLogin, getProfile } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", studentRegister);
router.post("/login", studentLogin);
router.get("/profile", getProfile);

export default router;

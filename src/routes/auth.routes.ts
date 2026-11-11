import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/userController.js";

const router = Router();

router.post("/register", createUser);
router.post("/login", login);

export default router;

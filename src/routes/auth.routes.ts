import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../schemas/authSchema.js";
const router = Router();

router.post("/register", validate(registerSchema), createUser); //solo sirve para crear usuarios de tipo USER
router.post("/login", validate(loginSchema), login); // CUALQUIERA PUEDE LOGEARSE ADMIN Y USERS

export default router;

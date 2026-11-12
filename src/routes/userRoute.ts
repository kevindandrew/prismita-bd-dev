import { Router } from "express";
import {
  createUser,
  createUser2,
  getUsers,
  getUserWhitPost,
} from "../controllers/userController";
const router = Router();
import { verifyToken } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";

router.get("/users", verifyToken, authorize("ADMIN"), getUsers); // PUEDE VER EL LISTADO DE TODOS LOS USUARIOS
router.post("/users", verifyToken, authorize("ADMIN"), createUser2); // PUEDE CREAR USUARIOS DE TIPO ADMIN Y USER
router.get("/users/:id", verifyToken, getUserWhitPost);
export default router;

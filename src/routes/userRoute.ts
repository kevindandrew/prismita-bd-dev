import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserWhitPost,
} from "../controllers/userController";
const router = Router();
import { verifyToken } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize.middleware";

router.get("/users", verifyToken, authorize("ADMIN"), getUsers);
router.post("/users", verifyToken, authorize("ADMIN"), createUser);
router.get("/users/:id", verifyToken, getUserWhitPost);
export default router;

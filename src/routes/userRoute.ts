import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserWhitPost,
} from "../controllers/userController";
const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.get("/users/:id", getUserWhitPost);
export default router;

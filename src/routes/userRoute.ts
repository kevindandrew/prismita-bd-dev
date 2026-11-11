import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserWhitPost,
  searchUsers,
} from "../controllers/userController";
const router = Router();

router.get("/users", getUsers);
router.get("/users/search", searchUsers);
router.post("/users", createUser);
router.get("/users/:id", getUserWhitPost);
export default router;

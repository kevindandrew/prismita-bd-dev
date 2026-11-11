import { Router } from "express";
import {
  getPost,
  createPost,
  getPostWhitId,
} from "../controllers/postController";
const router = Router();

router.get("/post", getPost);
router.get("/post/:id", getPostWhitId);
router.post("/post", createPost);

export default router;

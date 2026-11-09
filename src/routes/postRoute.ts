import { Router } from "express";
import { getPost, createPost } from "../controllers/postController";
const router = Router();

router.get("/post", getPost);
router.post("/post", createPost);

export default router;

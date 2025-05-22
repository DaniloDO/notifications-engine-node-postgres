
import express from "express";

import { postsController } from "../container/container.js";

const postsRouter = express.Router(); 

postsRouter.post("/create-post", (req, res) => postsController.createPost(req, res)); 

postsRouter.get("/id-post/:postId", (req, res) => postsController.getPostById(req, res)); 

postsRouter.put("/update-post/:postId", (req, res) => postsController.updatePost(req, res)); 

postsRouter.delete("/delete-post/:postId", (req, res) => postsController.deletePost(req, res)); 

export default postsRouter; 
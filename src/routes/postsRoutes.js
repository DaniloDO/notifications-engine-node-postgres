
import express from "express";

import postgresClient from "../database/config/postgresClient.js";
import PostsRepository from "../repositories/postsRepository.js";
import PostsService from "../services/postsService.js";
import PostsController from "../controllers/postsController.js";

const postsRouter = express.Router(); 

const postsRepository = new PostsRepository(postgresClient); 
const postsService = new PostsService(postsRepository); 
const postsController = new PostsController(postsService); 

postsRouter.post("/create-post", (req, res) => postsController.createPost(req, res)); 

postsRouter.get("/id-post/:postId", (req, res) => postsController.getPostById(req, res)); 

postsRouter.put("/update-post/:postId", (req, res) => postsController.updatePost(req, res)); 

postsRouter.delete("/delete-post/:postId", (req, res) => postsController.deletePost(req, res)); 

export default postsRouter; 
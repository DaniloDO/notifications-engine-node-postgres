
import express from "express"; 
import { commentsController } from "../container/container.js";

const commentsRouter = express.Router(); 

commentsRouter.post("/create-comment", (req, res) =>  commentsController.createComment(req, res)); 


export default commentsRouter; 
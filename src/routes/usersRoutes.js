
import express from "express"; 
import { usersController } from "../container/container.js";

const usersRouter = express.Router(); 

usersRouter.post("/create-user", (req, res) => usersController.createUser(req, res));

usersRouter.get("/email-user/:userEmail", (req, res) => usersController.getUserByEmail(req, res)); 

usersRouter.get("/id-user/:userId", (req, res) => usersController.getUserById(req, res)); 

usersRouter.put("/update-user/:userId", (req, res) => usersController.updateUser(req, res)); 

usersRouter.delete("/delete-user/:userId", (req, res) => usersController.deleteUser(req, res)); 

export default usersRouter; 
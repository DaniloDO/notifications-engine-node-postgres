
import express from "express"; 
import postgresClient from "../database/config/postgresClient.js";
import UsersRepository from "../repositories/usersRepository.js";
import UsersService from "../services/usersService.js";
import UsersController from "../controllers/usersController.js";

const usersRouter = express.Router(); 

const usersRepository = new UsersRepository(postgresClient);
const usersService = new UsersService(usersRepository); 
const usersController = new UsersController(usersService); 

usersRouter.post("\create-user", (req, res) => usersController.createUser(req, res)); 

export default usersRouter; 
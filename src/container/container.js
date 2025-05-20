import postgresClient from "../database/config/postgresClient.js";

import UsersRepository from "../repositories/usersRepository.js";
import UsersService from "../services/usersService.js";
import UsersController from "../controllers/usersController.js";

import PostsRepository from "../repositories/postsRepository.js";
import PostsService from "../services/postsService.js";
import PostsController from "../controllers/postsController.js";

import EventsRepository from "../repositories/eventsRepository.js";
import EventsService from "../services/eventsService.js";

export const eventsRepository = new EventsRepository(postgresClient);
export const eventsService = new EventsService(eventsRepository);

export const usersRepository = new UsersRepository(postgresClient);
export const usersService = new UsersService(usersRepository); 
export const usersController = new UsersController(usersService); 

export const postsRepository = new PostsRepository(postgresClient); 
export const postsService = new PostsService(postsRepository, eventsService); 
export const postsController = new PostsController(postsService); 

 
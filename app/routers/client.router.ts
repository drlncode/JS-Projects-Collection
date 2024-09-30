import { Router } from "express";
import { ClientController } from '../controllers/client.controller.js';

export const clientRouter = Router();

clientRouter.get('/', ClientController.base);
clientRouter.get('/home', ClientController.home);
clientRouter.get('/projects', ClientController.projects);
clientRouter.get('/projects/:folder/:file', ClientController.projectsSecondLevelStaticFiles);

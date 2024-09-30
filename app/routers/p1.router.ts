import { Router } from 'express';
import { Project1Controller } from '../controllers/p1.controller.js';

export const project01Router = Router();

project01Router.get('/projects/01/', Project1Controller.MainFile);
project01Router.get('/projects/01/:file', Project1Controller.FirstLevelStaticFiles);

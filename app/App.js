import express from 'express';
import { homePageRouter } from './routers/homePageRouter/router.js';
import { project01Router } from './routers/project01Router/router.js';

export const app = express();

app.disable('x-powered-by');

// Home router.
app.use(homePageRouter);

// Project 01 router.
app.use(project01Router);

app.use((req, res) => {
    res.status(404).send('Not Found.');
});

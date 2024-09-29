import express from 'express';
import { homePageRouter } from './routers/client.router.js';
import { project01Router } from './routers/p1.router.js';

const app = express();

app.disable('x-powered-by');

// Home router.
app.use(homePageRouter);

// Project 01 router.
app.use(project01Router);

app.use((_req, res) => {
    res.status(404).send('Not Found.');
});

export default app;

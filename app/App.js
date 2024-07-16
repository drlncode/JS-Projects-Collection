import express from 'express';
import { homePageRouter } from './routers/homePageRouter/router.js';

export const app = express();

app.disable('x-powered-by');

// Home router.
app.use(homePageRouter);

app.use((req, res) => {
    res.status(404).send('Not Found.');
});

import { Router } from "express";
import { join } from 'node:path';

const homePageFile = join(process.cwd(), '/app/homePage/index.html');
const homePageContent = join(process.cwd(), '/app/homePage/indexContent.html');
const projectsContent = join(process.cwd(), '/app/homePage/projectsContent.html');
const homePageDir = join(process.cwd(), '/app/homePage/');

export const homePageRouter = Router();

homePageRouter.get('/', (req, res) => {
    res.sendFile(homePageFile, (err) => {
        if (err) {
            res.status(500).send('Internal Server Error.');
        }
    });
});

homePageRouter.get('/home', (req, res) => {
    res.redirect('/');
});

homePageRouter.get('/projects', (req, res) => {
    res.redirect('/');
});

homePageRouter.get('/:folder/:file', (req, res) => {
    const { folder, file } = req.params;
    const requestFile = join(homePageDir, `/${folder}/${file}`);

    res.sendFile(requestFile, (err) => {
        if (err) {
            res.status(404).send('File Not Found');
        }
    });
});

// Dynamic content.
homePageRouter.post('/home', (req, res) => {
    res.sendFile(homePageContent, (err) => {
        if (err) {
            res.status(500).send('Internal Server Error.');
        }
    });
});

homePageRouter.post('/projects', (req, res) => {
    res.sendFile(projectsContent, (err) => {
        if (err) {
            res.status(500).send('Internal Server Error.');
        }
    });
});

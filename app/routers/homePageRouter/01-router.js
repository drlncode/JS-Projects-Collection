import { Router } from 'express';
import { join } from 'node:path';
import fs from 'node:fs/promises';

export const project01Router = Router();
const project01File = join(process.cwd(), '/projects/01-calculator/index.html');
const project01Dir = join(process.cwd(), '/projects/01-calculator/');

project01Router.get('/project/01/', (req, res) => {
    res.redirect('/');
});

project01Router.get('/project/01/:file', (req, res) => {
    const { file } = req.params;
    const filePath = `${project01Dir}/${file}`;
    
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File Not Found.');
        }
    });
});

project01Router.post('/project/01/', async (req, res) => {
    let indexFile;

    try {
        indexFile = await fs.readFile(project01File, 'utf-8');
    } catch (error) {
        res.status(500).send('Internal Server Error');
        console.log(error);
    }

    res.json(JSON.stringify({
        title: 'Projects - Calculator.',
        body: indexFile
    }));
});

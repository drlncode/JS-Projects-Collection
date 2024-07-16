import express from 'express';
import { join } from 'node:path';

export const app = express();
const homePageFile = join(process.cwd(), '/app/homePage/index.html');
const homePageDir = join(process.cwd(), '/app/homePage/');

app.get('/', (req, res) => {
    res.sendFile(homePageFile, (err) => {
        if (err) {
            res.status(500).send('Internal Server Error.');
        }
    });
});

app.get('/:folder/:file', (req, res) => {
    const { folder, file } = req.params;
    const requestFile = join(homePageDir, `/${folder}/${file}`);
    
    res.sendFile(requestFile, (err) => {
        if (err) {
            res.status(404).send('File Not Found');
        }
    });
});

app.use((req, res) => {
    res.status(404).send('Not Found.');
});

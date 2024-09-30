import { Request, Response } from 'express';
import { join } from 'node:path';
import fs from 'node:fs/promises';

const project01File = join(process.cwd(), '/projects/01-calculator/index.html');
const project01Dir = join(process.cwd(), '/projects/01-calculator/');

export class Project1Controller {
    static async MainFile(_req: Request, res: Response) {
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
    }

    static async FirstLevelStaticFiles(req: Request, res: Response) {
        const { file } = req.params;
        const filePath = `${project01Dir}/${file}`;
        
        res.sendFile(filePath, (err) => {
            if (err) {
                res.status(404).send('File Not Found.');
            }
        });
    }
}

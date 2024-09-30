import { Request, Response } from 'express';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

const homePageFile = join(process.cwd(), '/app/views/index.html');
const homePageContent = join(process.cwd(), '/app/views/indexContent.html');
const projectsContent = join(process.cwd(), '/app/views/projectsContent.html');
const homePageDir = join(process.cwd(), '/app/views/');

export class ClientController {
    static async base(_req: Request, res: Response) {
        res.sendFile(homePageFile, (err) => {
            if (err) {
                res.status(500).send('Internal Server Error.');
            }
        });
    }

    static async home(_req: Request, res: Response) {
        let resultContent;
    
        try {
            resultContent = await readFile(homePageContent, 'utf-8');
        } catch (error) {
            res.status(500).send('Internal Server Error.');
            throw error;
        }
    
        res.status(200).json(JSON.stringify({
            title: 'JS Projects Collection',
            body: resultContent
        }));
    }

    static async projects(_req: Request, res: Response) {
        let resultContent;

        try {
            resultContent = await readFile(projectsContent, 'utf-8');
        } catch (error) {
            res.status(500).send('Internal Server Error.');
            throw error;
        }

        res.status(200).json(JSON.stringify({
            title: 'Projects',
            body: resultContent
        }));
    }

    static async projectsSecondLevelStaticFiles(req: Request, res: Response) {
        const { folder, file } = req.params;
        const requestFile = join(homePageDir, `/${folder}/${file}`);

        res.sendFile(requestFile, (err) => {
            if (err) {
                res.status(404).send('File Not Found');
            }
        });
    }
}

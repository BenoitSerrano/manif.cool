import express from 'express';
import dotenv from 'dotenv';
import { config } from './config';
import { dataSource } from './dataSource';
import { visitorUseCases } from './modules';

dotenv.config();

async function runApp() {
    try {
        await dataSource.initialize();
        await dataSource.runMigrations();
    } catch (error) {
        console.error(error);
    }

    const app = express();

    app.get('/', (req, res, next) => {
        const ipAddress =
            req.header('x-forwarded-for')?.split(',')[0] || req.socket.remoteAddress || '';
        visitorUseCases.insertOneVisitor(ipAddress);
        next();
    });

    app.use(express.static('public'));

    app.listen(config.SERVER_PORT, () => {
        console.log(`Server is running at http://localhost:${config.SERVER_PORT}`);
    });
}

runApp();

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import mongoose from './dbs/init.mongodb.js';
import dotenv from 'dotenv';
import router from './routers/index.js';

const app = express();
dotenv.config();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

app.use('/', router);
export default app;
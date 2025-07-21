import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import mongoose from './dbs/init.mongodb.js';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());


app.get('/', (req, res, next)  => {
    return res.status(200).json({
        message: "Welcome to ShopDev",
    })
})

export default app;
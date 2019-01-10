// Requirement Libs
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import parser from 'body-parser';
import BOOT from './Boot/boostrap';

// Requirement .env file configutaion
dotenv.config({ path: path.join(__dirname, '.env') });

// Initialize instance express
const app = express();

// Setup middlewares
app.set('json-spaces', 3);
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use(parser.json({ limit: '10mb' }));
app.use(parser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Start Application
BOOT(app);

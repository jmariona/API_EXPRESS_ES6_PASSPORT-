import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import parser from 'body-parser';
import BOOT from './Boot/boostrap';

dotenv.config({ path: path.join(__dirname, '.env') });
const app = express();

app.set('json-spaces', 3);
app.use(helmet.xssFilter());
app.use(
	helmet.contentSecurityPolicy({
		directives: {
			defaultSrc: ['\'self\'']
		}
	})
);
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use(parser.json({ limit: '10mb' }));
app.use(parser.urlencoded({ extended: false }));
app.use(logger('dev'));

BOOT(app);

import express from 'express';
import BOOT from './Boot/boostrap';

const app = express();
BOOT(app);

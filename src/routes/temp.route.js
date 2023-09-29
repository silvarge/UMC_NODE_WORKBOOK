import express from 'express';
import { myLogger, tempTest, tempException, tempDatabase } from '../controllers/temp.controller.js';
import { status } from '../../config/response.status.js';
import { BaseError } from '../../config/error.js';

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);

tempRouter.get('/exception/:flag',tempException);

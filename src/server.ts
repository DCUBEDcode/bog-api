import express, { NextFunction, Request, Response } from 'express';
import db from './config/database.config';

import usersRouter from './users/route';

db.sync().then(() => {
  console.log('connect to db');
})

const app = express();
const port = 9000;

app.use(express.json());

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

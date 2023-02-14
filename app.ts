import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {connect} from 'mongoose';
import { AppConfig } from './src/config/config';
const app = express();
const port = AppConfig().app.port;

import { ProductRouter } from './src/routes/product';

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

connect(
  AppConfig().app.database.uri,
  options,
  () => {
    console.log('Database connected');
  }
);

app.use(express.json());

app.use('/api/v1/products', ProductRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

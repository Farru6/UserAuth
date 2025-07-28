import express from 'express';
const app = express();
import { connectDb } from './config/connection.js';
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());

const port = process.env.PORT;

import allRoutes from './routes/index.js';
app.use("/api", allRoutes);

connectDb();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { dot } from 'node:test/reporters';
import { connect } from 'http2';
import productRoutes from './routes/productRoutes.js';


const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();
 app.get('/', (req, res) => {
  res.send('API is running!');
});

app.use('/api/products', productRoutes); // Use product routes

app.use(notFound); // Middleware for 404 errors
app.use(errorHandler); // Middleware for handling errors

app.listen(port, () => console.log(`Server is running on port ${port}`));
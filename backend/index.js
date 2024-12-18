import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';

dotenv.config({ path: '.env' }); // Load environment variables

// Database connection
databaseConnection();

const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS setup to allow requests from your frontend domain (adjust the domain as needed)
const corsOptions = {
  origin: 'https://dalia5-lqro.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST'],                // Allow only specific HTTP methods
  credentials: true,                        // Allow cookies and authentication info to be sent
};

// Use CORS middleware with the above options
app.use(cors(corsOptions));

// API routes
app.use('/api/v1/user', userRoute);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening at port ${process.env.PORT}`);
});

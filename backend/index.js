import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

databaseConnection();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
     origin: 'http://localhost:3000',
     methods: ['GET', 'POST', 'DELETE', 'PUT'],  // Allow these methods
     allowedHeaders: ['Content-Type', 'Authorization'], // Add required header
     credentials: true
};
app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening at port ${process.env.PORT}`);
});

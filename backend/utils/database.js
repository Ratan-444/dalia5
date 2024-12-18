import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const databaseConnection = () => {
    const mongoUri = process.env.MONGO_URI;
    console.log("Connecting to:", mongoUri); // Debug log
    mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("MongoDB connected successfully.");
        })
        .catch((error) => {
            console.log("Error connecting to MongoDB:", error);
        });
};

export default databaseConnection;

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/routes/itemRoutes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://vercel-deploy-client-pink.vercel.app", // Update this to your frontend URL
  })
);
app.use(express.json());
app.use("/api", router);

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDB", err));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if the connection fails
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

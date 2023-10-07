import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import faqRoute from "./routes/faq.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);

    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/faq", faqRoute);

app.listen(8800, () => {
  connect();
  console.log("connected to the backend");
});

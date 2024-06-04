import express from "express";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv").config();

const app = express();
const DB_CONN = process.env.DB_CONN;
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(DB_CONN).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${3000}/`);
  });
});

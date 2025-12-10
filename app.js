import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import projectRoutes from "./routes/projectRoutes.js"
import clientRoutes from "./routes/clientRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"
import newsletterRoutes from "./routes/newsletterRoutes.js";

import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"))

app.use("/app/projects" , projectRoutes);
app.use("/app/clients" , clientRoutes);
app.use("/app/contacts" , contactRoutes);
app.use("/app/newsletter", newsletterRoutes);


mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(process.env.PORT, () => {
      console.log("Server started on port");
    });
  })
  .catch(error => {
    console.log("Database connection failed:", error);
  });

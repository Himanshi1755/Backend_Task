import express from "express";
import {createRespose , getAllResponse } from  "../controllers/contactController.js";

const router = express.Router();

router.post("/", createRespose);
router.get("/",  getAllResponse);

export default router;

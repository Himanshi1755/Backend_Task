import express from "express";
import {addSubscriber , getAllS } from "../controllers/newsletterController.js";

const router = express.Router();

router.post("/",  addSubscriber);
router.get("/",  getAllS);

export default router;

import express from "express";
import multer from "multer";
import { addprojects, getAllProjects } from "../controllers/projectController.js";
import { uploadProject } from "../middleware/multer.js";

const router = express.Router();

router.post("/", uploadProject.single("pImage"), addprojects);
router.get("/", getAllProjects);

export default router;

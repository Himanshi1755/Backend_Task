import express from "express";
import multer from "multer";
import { addprojects, getAllProjects } from "../controllers/projectController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });


router.post("/", upload.single("pImage"), addprojects);
router.get("/", getAllProjects);

export default router;

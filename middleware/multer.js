import fs from "fs";
import multer from "multer";


const projectFolder = "uploads/projects";
if (!fs.existsSync(projectFolder)) fs.mkdirSync(projectFolder, { recursive: true });

const projectStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, projectFolder),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
export const uploadProject = multer({ storage: projectStorage });


const clientFolder = "uploads/clients";
if (!fs.existsSync(clientFolder)) fs.mkdirSync(clientFolder, { recursive: true });

const clientStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, clientFolder),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
export const uploadClient = multer({ storage: clientStorage });

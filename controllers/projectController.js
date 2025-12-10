import express from "express";
import { Projects } from "../models/projectModel.js";

export const addprojects = async (req, res) => {
    try {
        const { pName, pDescription } = req.body;
    
    const pImage = req.file
  ? `http://localhost:5000/uploads/${req.file.filename}`
  : req.body.pImage || null;

      
        const newProject = await Projects.create({ pImage ,pName , pDescription });

        res.status(201).json({ message: "Project added successfully", project: newProject, });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message, });
    }
};


export const getAllProjects = async (req, res) => {
    try {
        const projects = await Projects.find().sort({ createdAt: -1 });

        res.status(200).json({ message: "Projects fetched successfully", AllProjects: projects });

    } catch (error) {
        res.status(500).json({ message: "Something Went Wrng", error: error.message, });
    }
};

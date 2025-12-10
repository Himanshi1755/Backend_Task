import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    pImage: {
      type: String,
      required: false,
    },
    pName: {
      type: String,
      required: true,
    },
    pDescription: {
      type: String,
      required: true,
    }
} , {timestamps : true});

export const Projects = mongoose.model("project", projectSchema);
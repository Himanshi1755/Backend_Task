import express from "express";
import { Client } from "../models/clientModel.js";

export const addclients = async (req, res) => {
    try {
        const {  name, description, designation } = req.body;

// const image = `${req.protocol}://${req.get("host")}/${req.file.path.replace(/\\/g, "/")}`;
const image = req.file?.path;
        const newClient = await Client.create({ image, name, description, designation, });

        res.status(201).json({ message: "Client added successfully", client: newClient });
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong", error: error.message, });
    }
};


export const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });

        res.status(200).json({ message: "Clients fetched successfully", AllClients: clients, });
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong", error: error.message, });
    };
}

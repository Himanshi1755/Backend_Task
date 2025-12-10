import express from "express";
import { Contacts } from "../models/contactsModel.js";

export const createRespose = async (req, res) => {
    try {
        const { fullName, email, mobile, city } = req.body;

        const newResponse = await Contacts.create({ fullName, email, mobile, city });

        res.status(201).json({
            message: "Contactform submitted successfully", Response: newResponse,
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message, });
    }
};

export const getAllResponse = async (req, res) => {
    try {
        const responses = await Contacts.find().sort({ createdAt: -1 });

        res.status(200).json({ message: "Contact responses fetched successfully", AllResponse: responses });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message, });
    }
};

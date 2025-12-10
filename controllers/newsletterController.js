import express from "express";
import { Newsletter } from "../models/newsletterModel.js";

export const addSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return res.status(400).json({
        message: "Email already subscribed",
      });
    }
    const subscriber = await Newsletter.create({ email });

    res.status(201).json({ message: "Subscription successful", Subscribers : subscriber });
  } catch (error) {
   res.status(500).json({ message: "Something Went Wrong", error: error.message, });
  }
};


export const getAllS = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Subscribers fetched successfully", AllSubscriber : subscribers, });

  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong", error: error.message, });
  }
};

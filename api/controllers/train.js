import mongoose from "mongoose";
import Train from "../models/Train.js"; // Assuming your Train model is defined in a separate file

//Creating Trains
export const createTrain = async (req, res, next) => {
    const newtrain = new Train(req.body);
  
    try {
      const savedTrain = await newtrain.save();
      res.status(200).json(savedTrain);
    } catch (err) {
      next(err);
    }
  };

//Geting of Trains
export const getTrainsBetweenStations = async (req, res, next) => {
  try {
    const { startingStation, destinationStation, date } = req.query;

    // Parse the date to ISO format
    const isoDate = new Date(date).toISOString();

    // Find trains that run between the given stations on the specified date
    const trains = await Train.find({
      startingStation: startingStation,
      destinationStation: destinationStation,
      "runningDates.dates": isoDate.substr(0, 10) // Extract yyyy-mm-dd part
    });

    res.status(200).json(trains);
  } catch (err) {
    next(err);
  }
};

export const getTicketCategoriesForTrain = async (req, res, next) => {
  try {
    const { trainId } = req.params;

    // Find the train by ID
    const train = await Train.findById(trainId);

    if (!train) {
      return res.status(404).json({ message: "Train not found" });
    }

    // Extract TicketCategory data from the train
    const ticketCategories = train.ticketCategories;

    res.status(200).json(ticketCategories);
  } catch (err) {
    next(err);
  }
};

import createError from "../utils/error.js";
import Train from "../models/Trains.js";

export const createTrain = async (req, res, next) => {
  const newTrain = new Train(req.body);

  try {
    const savedTrain = await newTrain.save();
    res.status(200).json(savedTrain);
  } catch (err) {
    next(err);
  }
};

export const getTrainsBetweenStations = async (req, res, next) => {
    try {
      const { startingStation, destinationStation, date } = req.query;

      const isoDate = new Date(date).toISOString();

      const trains = await Train.find({
        startingStation: startingStation,
        destinationStation: destinationStation,
        "runningDates.dates": isoDate.substring(0, 10)
      });

      res.status(200).json({trains});
    } catch (err) {
      next(err);
    }
  };


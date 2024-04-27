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



// export const getTrainsBetweenStations = async (req, res, next) => {
//   const { startingStation, destinationStation, date } = req.query;

//   try {
//     // Find trains with the same starting and destination stations
//     const trains = await Train.find({
//       startingStation,
//       destinationStation,
//     });

//     console.log(trains)

//     // Filter trains based on running dates
//     const filteredTrains = trains.filter((train) => {
//       return train.runningDates.some((day) => {
//         return day.dayOfWeek === getDayOfWeek(date) && day.dates.includes(date);
//       });
//     });

//     res.status(200).json(filteredTrains);
//   } catch (err) {
//     next(err);
//   }
// };

// // Helper function to get the day of the week from a date string (assuming date format is YYYY-MM-DD)
// function getDayOfWeek(dateString) {
//   const date = new Date(dateString);
//   const days = ["Su", "M", "T", "W", "Th", "F", "S"];
//   return days[date.getDay()];
// }

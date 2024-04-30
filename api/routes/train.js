import express from "express";
import { createTrain, getTrainsBetweenStations } from "../controllers/train.js";
const router = express.Router();

//get Trains By Stations and dates

router.get("/getTrainsBetweenStations",getTrainsBetweenStations);

router.post("/createTrain",createTrain);

export default router;
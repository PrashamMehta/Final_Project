import express from "express";
import { createTrain, getTrainsBetweenStations } from "../controllers/train.js";

const router = express.Router();


router.post("/createtrain", createTrain);
router.get("/getTrain", getTrainsBetweenStations);

export default router;

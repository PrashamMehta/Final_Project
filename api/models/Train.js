import mongoose from "mongoose";

const { Schema } = mongoose;

const TicketCategorySchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Sleeper (SL)', 'AC 3 Economy (3E)', 'AC 3 Tier (3A)', 'AC 2 Tier (2A)', 'AC First Class(1A)'],
        required: true
    },
    maxCapacity: {
        type: Number,
        required: true
    },
    // Modify booked to be an array of objects containing date and booked count
    booked: [{
        date: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            default: 0
        }
    }]
});

const TrainSchema = new mongoose.Schema({
    trainNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    runningDates: {
        type: [{
            dayOfWeek: {
                type: String,
                enum: ['M', 'T', 'W', 'Th', 'F', 'S', 'Su']
            },
            dates: [String]
        }],
        required: true
    },
    startingStation: {
        type: String,
        required: true
    },
    destinationStation: {
        type: String,
        required: true
    },
    startingTime: {
        type: String,
        required: true
    },
    endingTime: {
        type: String,
        required: true
    },
    ticketCategories: {
        type: [TicketCategorySchema],
        required: true
    }
});

export default mongoose.model("Train", TrainSchema);

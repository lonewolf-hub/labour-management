import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const jobGenreSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    name: {
        type: String,
        required: [true, "Please provide a job genre name"],
        unique: true,
    },
});

const JobGenre = mongoose.models.JobGenre || mongoose.model("JobGenre", jobGenreSchema);
export default JobGenre;

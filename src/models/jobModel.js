import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const jobSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    title: {
        type: String,
        required: [true, "Please provide a job title"],
    },
    description: {
        type: String,
        required: [true, "Please provide a job description"],
    },
    location: {
        type: String,
        required: [true, "Please provide a job location"],
    },
    type: {
        type: String,
        enum: ['full-time', 'internship', 'intraday-task', 'part-time'],
        required: [true, "Please provide a job type"],
    },
    genre: {
        type: String, 
        ref: 'JobGenre',
        required: [true, "Please provide a job genre"],
    },
    createdBy: {
        type: String, // Assuming the user's _id
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
        required: true,
    },
}, { timestamps: true });

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
export default Job;

// userPreferenceModel.ts
import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const userPreferenceSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    userId: {
        type: String, // Assuming the user's _id
        ref: 'User',
        required: true,
    },
    jobId: {
        type: String, // Assuming the _id of the Job
        ref: 'Job',
        required: true,
    },
}, { timestamps: true });

const UserPreference = mongoose.models.UserPreference || mongoose.model("UserPreference", userPreferenceSchema);
export default UserPreference;

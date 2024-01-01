// userPreferenceController.ts
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import UserPreference from "@/models/userPreferenceModal";
import User from "@/models/userModel";
import Job from "@/models/jobModel";

connect();

export async function POST(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);

        // Assuming request.body contains the job information
        const { jobId } = await request.json();

        // Check if the user is already enrolled in the job
        const userPreferenceExists = await UserPreference.exists({ userId, jobId });

        if (userPreferenceExists) {
            return NextResponse.json({ error: "User is already enrolled in the job" }, { status: 400 });
        }

        // Create a new user preference
        const userPreference = new UserPreference({ userId, jobId });
        const savedUserPreference = await userPreference.save();

        return NextResponse.json({
            message: "User Enrolled in Job Successfully",
            data: savedUserPreference
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

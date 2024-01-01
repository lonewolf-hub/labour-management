import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import UserPreference from "@/models/userPreferenceModal";
import User from "@/models/userModel";
import Job from "@/models/jobModel";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);

        // Fetch user preferences based on userId
        const userPreferences = await UserPreference.find({ userId });

        // Extract jobIds from userPreferences
        const jobIds = userPreferences.map((preference) => preference.jobId);

        // Fetch jobs based on jobIds
        const jobs = await Job.find({ _id: { $in: jobIds } });

        return NextResponse.json({
            message: "Fetched user's applied jobs successfully",
            data: jobs,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
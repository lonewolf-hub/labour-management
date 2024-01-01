// jobController.ts
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Job from "@/models/jobModel";
import User from "@/models/userModel";

interface JobRequestBody {
    title: string;
    description: string;
    location: string;
    type: 'full-time' | 'internship' | 'intraday-task' | 'part-time';
    genre: string;
    createdBy: string;
    status: 'active' | 'inactive';
}

connect();

export async function POST(request: NextRequest) {
    try {
        const adminId = await getDataFromToken(request);
        const admin = await User.findOne({ _id: adminId }).select("-password");

        if (admin.role !== 'admin') {
            // Deny access if the user is not an admin
            return NextResponse.json({ error: "Access Denied" }, { status: 403 });
        }

        const requestBody: JobRequestBody = await request.json();

        // Add the automatically extracted createdBy field
        requestBody.createdBy = adminId;

        // Explicitly set the status field when creating a new job
        const job = new Job({ ...requestBody, status: 'active' });
        const savedJob = await job.save();

        return NextResponse.json({
            message: "Job Created Successfully",
            data: savedJob
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

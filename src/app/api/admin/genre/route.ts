// adminController.ts

import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import JobGenre from "@/models/jobGenre"; 
import User from "@/models/userModel";

connect();

interface JobGenreRequestBody {
    name: string;
}

export async function POST(request: NextRequest) {
    try {
        const adminId = await getDataFromToken(request);
        const admin = await User.findOne({ _id: adminId }).select("-password");

        if (admin.role !== 'admin') {
            // Deny access if the user is not an admin
            return NextResponse.json({ error: "Access Denied" }, { status: 403 });
        }

        // Check if request.body is not null
        if (!request.body) {
            return NextResponse.json({ error: "Request body is missing" }, { status: 400 });
        }

        // Validate the request body
        const requestBody: JobGenreRequestBody = await request.json();

        // Create a new job genre
        const jobGenre = new JobGenre({ name: requestBody.name });
        const savedJobGenre = await jobGenre.save();

        return NextResponse.json({
            message: "Job Genre Added Successfully",
            data: savedJobGenre
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
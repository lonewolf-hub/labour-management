// jobController.ts
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Job from "@/models/jobModel";

connect();

export async function GET(_request: NextRequest) {
    try {
        const jobs = await Job.find();

        return NextResponse.json({
            message: "Jobs Retrieved Successfully",
            data: jobs
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

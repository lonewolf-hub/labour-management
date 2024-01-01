import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import JobGenre from "@/models/jobGenre"; 

connect();

export async function GET(request: NextRequest) {
    try {
        const jobGenres = await JobGenre.find();

        return NextResponse.json({
            message: "Job Genres Retrieved Successfully",
            data: jobGenres
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
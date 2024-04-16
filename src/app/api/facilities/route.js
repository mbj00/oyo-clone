import connectDB from "../db";
import Hotel from "../models/hotelModel";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    connectDB();
        const facilities = await Hotel.find({}).distinct('facilities.name');
        console.log(facilities);
        return NextResponse.json({ msg: "Hotel fetched successfully", facilities }, { status: 200 })
}
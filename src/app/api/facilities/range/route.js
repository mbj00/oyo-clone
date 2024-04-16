import connectDB from "../../db";
import Hotel from "../../models/hotelModel";
import { NextResponse } from "next/server";

export async function GET(req) {
    connectDB();
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('val');
    console.log(query);
    const hotels = await Hotel.find({priceCurrent : {$lte: query}});
    console.log(hotels);
    return NextResponse.json({ msg: "Hotel fetched successfully", hotels }, { status: 200 })
}
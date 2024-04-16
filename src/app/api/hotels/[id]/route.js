import connectDB from "../../db";
import Hotel from "../../models/hotelModel";
import { NextResponse } from "next/server";

export async function GET(request, content) {
    connectDB();
    if(content.params.id){
        const hotels = await Hotel.findById(content.params.id);
        console.log(hotels.name);
        return NextResponse.json({ msg: "Hotel fetched successfully", hotels }, { status: 200 })
    }
}
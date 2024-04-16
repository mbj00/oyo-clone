import { NextResponse } from "next/server";
import connectDB from "../db";
import Hotel from '../models/hotelModel'


export async function POST(req) {
    connectDB();
    const { name, location, address, desc, banner, gallary, priceOld, priceCurrent , facilities, rating, type } = await req.json();
    const newHotel = await new Hotel({ name, location, address, desc, banner, gallary, priceOld, priceCurrent, facilities, rating, type });
    const result = await newHotel.save();
    return NextResponse.json({ msg: "Hotel added successfully", result }, { status: 200 })
}

export async function GET(req) {
    connectDB();
    const searchParams = req.nextUrl.searchParams;    
    const query = searchParams.get('location');
    // console.log(query);
    
    const hotels = await Hotel.find({location : query});
    if(hotels.length > 0){
       return NextResponse.json({ msg: "Hotel fetched successfully", hotels }, { status: 200 })
    }
    const allHotels = await Hotel.find({});
    return NextResponse.json({ msg: "Hotel fetched successfully", allHotels }, { status: 200 })



    // if (query) {
    //     const hotels = await Hotel.find({ location: query })
    //     if (hotels.length > 0) {
    //         return NextResponse.json({ msg: "Hotel fetched successfully", hotels }, { status: 200 })
    //     } else {
    //         return NextResponse.json({ msg: "No Hotel available" }, { status: 200 })
    //     }
    // }else{
    //     const allHotels = await Hotel.find({});
    //     if (allHotels.length > 0) {
    //         return NextResponse.json({ msg: "Hotel fetched successfully", allHotels }, { status: 200 })
    //     } else {
    //         return NextResponse.json({ msg: "No Hotel available" }, { status: 200 })
    //     }
    // }





}


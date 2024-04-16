import { NextResponse } from "next/server";
import connectDB from "../db";
import Razorpay from "razorpay";
import shortid from "shortid";
import Hotel from "../models/hotelModel"


export async function POST(req) {
    const {id} = await req.json();

    connectDB();
    const razorpay = new Razorpay({
        key_id : process.env.RAZORPAY_KEY,
        key_secret : process.env.RAZORPAY_SECRET 
    })

    const hotel = await Hotel.findOne({_id: id});

    const amount = hotel.priceCurrent;

    const options = {
        amount : (amount * 100).toString(),
        currency : "INR",
        receipt : shortid.generate(),
        payment_capture : 1
    }

    try {
        const result = await razorpay.orders.create(options);
        console.log(result);
        return NextResponse.json({
            id: result.id,
            currency: result.currency,
            amount: result.amount
        })
    } catch (error) {
        console.log(error)
    }
}
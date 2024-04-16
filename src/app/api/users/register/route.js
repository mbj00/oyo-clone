import { NextResponse } from "next/server";
import connectDB from "../../db";
import User from "../../models/usersModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export async function POST(req) {
    const { name, email, password } = await req.json()
    
    // Check all required entries

    if (!name || !email || !password) {
        return NextResponse.json({ msg: "All feilds are required" });
    } 
    else {
        connectDB();
        const emailExists = await User.findOne({ email: email });
        // check if user exists
        if(emailExists){
            return new Response({ msg: "User already exists" });
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10)
            // Save new user to database
            const newUser = new User({
                name, email, password : hashedPassword
            });
            const result = await newUser.save();

            const token = jwt.sign({token:result._id}, process.env.JWT_SECRET, {expiresIn: '30d'})

            return NextResponse.json({msg: "User added successfully", token}, {status: 200})
        }
    }
}
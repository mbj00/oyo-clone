import { NextResponse } from "next/server";
import connectDB from "../../db";
import User from "../../models/usersModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export async function POST(req) {
    connectDB();
    const {email, password} = await req.json();
    if(!email || !password){
        return NextResponse.json({msg: "Please fill all the details"})
    }
    else{
        const emailExists = await User.findOne({email});
        if(emailExists){
            const passwordMatched =await bcrypt.compare(password, emailExists.password);
            if(passwordMatched){
                const token = jwt.sign({ token : emailExists._id}, process.env.JWT_SECRET, {expiresIn: "30d"});
                const {password, ...userData} = emailExists._doc;
                return NextResponse.json({msg : "Logged in successfully", token, userData }, {status: 200})
            }else{
                return NextResponse.json({msg: "Invalid Credentials!"})
            }
        }else{
            return NextResponse.json({msg : "User not found!"})
        }
    }
    
}
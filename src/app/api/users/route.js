import { NextResponse } from "next/server";
import connectDB from "../db";
import User from "../models/usersModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';























// export default async function rowdy(req, res) {
//     if (req.method == "GET") {
//         res.status(200).json({ msg: "new function called" })
//         console.log("reached")
//     }
// }
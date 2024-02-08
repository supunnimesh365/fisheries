import { connectDB } from "@/utils/connect";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) {
      return (
        console.log("Username or email already exist"),
        NextResponse.json({ message: "Username or email already exist" }),
        { status: 500 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    console.log("User registered");
    return NextResponse.json({ message: "User registered" }, { status: 201 });
    console.log({ username, email, password });
    return;
  } catch (error) {

    console.log("Error while registering the user", error);
    return NextResponse.json(
        console.log("Error occured while registering the users"), 
      { message: "Error occured while registering the users" },
      { status: 500 }
    );
  }
}

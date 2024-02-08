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
      console.log("1");
      return NextResponse.json(
        { message: "Username or email already exist" },
        { status: 500 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    console.log("User registered");
    return NextResponse.json(
      {
        message:
          "user registered, It will take some time to gain access to this user, please contact system admin for the more details",
      },
      { status: 201 }
    );
    // console.log({ username, email, password });
    return;
  } catch (error) {
    console.log("2");
    return NextResponse.json(
      { message: "Error occured while registering the users" },
      { status: 500 }
    );
  }
}

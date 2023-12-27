import { NextResponse } from "next/server";
import User from "../../../Models/userModel";
import bcryptjs from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, email, password } = body.userData;
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "E-Mail already exists" });
    }
    // await User.create({ username, email, password: hashedPassword });
    console.log("User Created");

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

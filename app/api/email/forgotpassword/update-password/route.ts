import { NextResponse } from 'next/server';
import connection from '@/db/config';
import User from '@/models/userModels'; // Adjust this path as needed
import Otp from '@/models/otpmodel'; // Ensure this is the correct path
import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function POST(req: Request) {
  await connection();

  const { email, otp, newPassword } = await req.json();

  try {
    // Validate input
    if (!email || !otp || !newPassword) {
      return NextResponse.json(
        { message: "Email, OTP, and new password are required." },
        { status: 400 }
      );
    }

    // Find the OTP record by email
    const otpRecord = await Otp.findOne({ email });
    if (!otpRecord || otpRecord.otp !== otp) {
      return NextResponse.json(
        { message: "Invalid OTP." },
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the user's password with the hashed password
    user.password = hashedPassword;
    await user.save();

    // Optionally, delete the OTP record once it is verified
    await Otp.deleteOne({ email });

    return NextResponse.json(
      { message: "Password updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in password reset:", error);
    return NextResponse.json(
      { message: "Failed to reset password.", error: error.message },
      { status: 500 }
    );
  }
}

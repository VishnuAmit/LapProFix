import { NextResponse } from 'next/server';
import connection from '@/db/config';
import Otp from '@/models/otpmodel'; // Ensure this path is correct
import User from '@/models/userModels'; // Adjust the path to your User model
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  await connection();

  const { email } = await request.json();

  // Check if the user exists in the database
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { message: "User does not exist." },
      { status: 404 }
    );
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save OTP in the database
  try {
    await Otp.findOneAndUpdate(
      { email }, // Find by email
      { email, otp }, // Set email and new OTP
      { upsert: true, new: true, setDefaultsOnInsert: true } // Upsert options
    );
  } catch (err) {
    return NextResponse.json(
      { message: 'Failed to save OTP to database.', error: err.message },
      { status: 500 }
    );
  }

  // Setup transporter for nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Your OTP Code</h2>
        <p>Your One-Time Password (OTP) is: <strong>${otp}</strong></p>
        <p>Please do not share this code with anyone.</p>
        <p>If you did not request this OTP, please ignore this email.</p>
      </div>
    `,
  };

  try {
    // Send email with OTP
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Your OTP has been successfully sent to your email." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send OTP.", error: error.message },
      { status: 500 }
    );
  }
}

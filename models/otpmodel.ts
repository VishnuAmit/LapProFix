import mongoose from 'mongoose';

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // OTP will automatically expire after 5 minutes (300 seconds)
  },
});

const Otp = mongoose.models.Otp || mongoose.model('Otp', OtpSchema);
export default Otp;

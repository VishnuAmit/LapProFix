"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    // Validate inputs
    if (!email) {
      setError("Email is required.");
      setLoading(false);
      return;
    }
    
    if (isOtpSent && (!otp || !newPassword)) {
      setError("Both OTP and new password are required.");
      setLoading(false);
      return;
    }

    try {
      const url = isOtpSent
        ? "/api/email/forgotpassword/update-password" // Endpoint to verify OTP and update password
        : "/api/email/forgotpassword/send-otp"; // Endpoint to send OTP

      const data = isOtpSent
        ? { email, otp, newPassword }
        : { email };

      const response = await axios.post(url, data);
      setSuccessMessage(response.data.message);

      if (isOtpSent) {
        // Optionally, redirect to the sign-in page after a delay
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      } else {
        setIsOtpSent(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Operation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="dark:bg-dark mx-auto max-w-[500px] rounded px-6 py-10 shadow-three sm:p-[60px]">
              <h3 className="dark:text-white mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
                Forgot Password
              </h3>
              <p className="mb-11 text-center text-base font-medium text-body-color">
                {isOtpSent 
                  ? "Please enter the OTP sent to your email and your new password." 
                  : "Enter your registered email address, and an OTP will be sent to your inbox."}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label htmlFor="email" className="dark:text-white mb-3 block text-sm text-dark">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                  />
                </div>

                {isOtpSent && (
                  <>
                    <div className="mb-8">
                      <label htmlFor="otp" className="dark:text-white mb-3 block text-sm text-dark">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        name="otp"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      />
                    </div>

                    <div className="mb-8">
                      <label htmlFor="newPassword" className="dark:text-white mb-3 block text-sm text-dark">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        placeholder="Enter New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary"
                      />
                    </div>
                  </>
                )}

                {error && <p className="mb-4 text-center text-red-500">{error}</p>}
                {successMessage && <p className="mb-4 text-center text-green-500">{successMessage}</p>}

                <button
                  type="submit"
                  className="w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-primary-dark"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Processing..." : isOtpSent ? "Verify OTP and Update Password" : "Send OTP"}
                </button>
              </form>

              <div className="mt-8 text-center">
                <Link
                  href="/signin"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;

"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Dashboard: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto p-6">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="LapProFix" width={50} height={50} />
          <h1 className="ml-3 text-2xl font-bold">LapProFix</h1>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <span className="material-icons-outlined mr-2">location_on</span>
            <input
              type="text"
              className="border-b-2 border-gray-300 focus:outline-none"
              placeholder="Chennai, Tamil Nadu"
            />
          </div>
          <div className="ml-8 flex items-center space-x-6">
            <div className="text-sm">+91 9876543210</div>
            <div className="text-sm">+91 1234567890</div>
            <div className="flex items-center space-x-2">
              <span className="material-icons-outlined">shopping_cart</span>
              <span className="material-icons-outlined">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Category Section */}
      <main className="flex justify-around mt-8">
        <div
          className="category-card cursor-pointer text-center"
          onClick={() => router.push('/instant-book')}
        >
          <Image src="/instant_book.png" alt="Instant Book" width={64} height={64} />
          <h3 className="mt-2 font-semibold">Instant Book</h3>
        </div>
        <div
          className="category-card cursor-pointer text-center"
          onClick={() => router.push('/windows')}
        >
          <Image src="/windows_logo.png" alt="Windows" width={64} height={64} />
          <h3 className="mt-2 font-semibold">Windows</h3>
        </div>
        <div
          className="category-card cursor-pointer text-center"
          onClick={() => router.push('/apple')}
        >
          <Image src="/apple_logo.png" alt="Apple" width={64} height={64} />
          <h3 className="mt-2 font-semibold">Apple</h3>
        </div>
        <div
          className="category-card cursor-pointer text-center"
          onClick={() => router.push('/others')}
        >
          <Image src="/others_logo.png" alt="Others" width={64} height={64} />
          <h3 className="mt-2 font-semibold">Others</h3>
        </div>
      </main>

      {/* Progress Bar Section */}
      <section className="mt-12">
        <div className="progress-bar flex justify-center items-center space-x-4">
          <div className="step completed">Booking</div>
          <div className="step">Assigning</div>
          <div className="step">Progress</div>
          <div className="step">Complete</div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

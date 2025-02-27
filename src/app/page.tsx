"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div className="py-24">
      
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900">Find Your Dream Job with AI</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Our AI-powered job matching system connects you with the best opportunities tailored to your skills.
        </p>
      </div>

    
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
      >
        <SwiperSlide>
          <img src="/slide1.jpg" alt="AI Matching Jobs" className="w-full h-64 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide2.jpg" alt="Best Career Growth" className="w-full h-64 object-fill" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide3.jpg" alt="Top Companies Hiring" className="w-full h-64 object-fill" />
        </SwiperSlide>
      </Swiper>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <img src="/ai.jpg" alt="AI Matching" className="mx-auto w-16 h-16" />
          <h3 className="text-xl font-semibold mt-4">AI-Powered Job Matching</h3>
          <p className="text-gray-600 mt-2">Find the best jobs based on your skills and preferences.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <img src="/resume.jpg" alt="Resume Analysis" className="mx-auto w-16 h-16" />
          <h3 className="text-xl font-semibold mt-4">Smart Resume Analysis</h3>
          <p className="text-gray-600 mt-2">Get AI-driven feedback to improve your resume.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <img src="/growth.jpg" alt="Career Growth" className="mx-auto w-16 h-16" />
          <h3 className="text-xl font-semibold mt-4">Career Growth Insights</h3>
          <p className="text-gray-600 mt-2">Explore job trends and salary expectations.</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
        <p className="text-gray-600 mt-2">A simple and effective process to land your dream job.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">1. Create Your Profile</h3>
            <p className="text-gray-700 mt-2">Fill in your skills, experience, and preferences.</p>
          </div>
          <div className="p-6 bg-blue-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">2. AI Matches You</h3>
            <p className="text-gray-700 mt-2">Our system finds the best job matches for you.</p>
          </div>
          <div className="p-6 bg-blue-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">3. Apply & Get Hired</h3>
            <p className="text-gray-700 mt-2">Submit applications and get interview opportunities.</p>
          </div>
        </div>

        <Link href="/jobs">
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Start Finding Jobs
          </button>
        </Link>
      </div>
    </div>
  );
}

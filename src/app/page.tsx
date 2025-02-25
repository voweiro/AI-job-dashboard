"use client";

import { useState } from "react";
import Link from "next/link";
import { useJobStore } from "@/store/jobStore";

const JOBS_PER_PAGE = 5;

export default function JobList() {
  const { jobs } = useJobStore();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const paginatedJobs = jobs.slice((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Recommendations</h1>

      {paginatedJobs.map((job) => (
        <div key={job.id} className="p-4 border rounded mb-4 shadow-md">
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.company} - {job.location}</p>
          <p className="text-gray-500">{job.salary}</p>
          <div className={`px-2 py-1 rounded ${job.matchScore >= 80 ? "bg-green-500 text-white" : job.matchScore >= 50 ? "bg-yellow-500 text-black" : "bg-red-500 text-white"}`}>
            Match Score: {job.matchScore}%
          </div>
          <Link href={`/job/${job.id}`} className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            View Details
          </Link>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          Next
        </button>
      </div>
    </main>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useJobStore } from "@/store/jobStore";
import JobCard from "@/components/JobCard";
import Pagination from "@/components/Pagination";
import LoadingSkeleton from "@/components/LoadingSkeleton"; // ✅ Import the skeleton loader

const HomePage = () => {
  const { jobs, setJobs } = useJobStore();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const [loading, setLoading] = useState(true); // ✅ Track loading state

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true); // ✅ Start loading before fetching data

      try {
        const res = await fetch("/jobs.json");
        const data = await res.json();

        // ✅ Add artificial delay before displaying jobs
        setTimeout(() => {
          setJobs(data);
          setLoading(false);
        }, 2000); // ⏳ 2-second delay
      } catch (error) {
        console.error("Error loading jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [setJobs]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Find Your Dream Job</h1>

      {loading ? ( // ✅ Show skeleton loader while waiting
        <LoadingSkeleton />
      ) : currentJobs.length === 0 ? (
        <p className="text-center text-red-500">⚠️ No jobs available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(jobs.length / jobsPerPage)}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default HomePage;

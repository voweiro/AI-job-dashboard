"use client";
import { useEffect, useState } from "react";
import { useJobStore } from "@/store/jobStore";
import JobCard from "@/components/JobCard";
import Pagination from "@/components/Pagination";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function JobsPage() {
  const { jobs, setJobs } = useJobStore();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await fetch("/jobs.json");
        if (!res.ok) throw new Error("Failed to load jobs");

        const data = await res.json();
        setTimeout(() => {
          setJobs(data);
          setLoading(false);
        }, 2000);
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
      <h1 className="text-3xl  py-6 font-bold text-blue-700 text-center mb-6">
        Browse Available Jobs
      </h1>

      {loading ? (
        <LoadingSkeleton />
      ) : currentJobs.length === 0 ? (
        <p className="text-center text-red-500">⚠️ No jobs match your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
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
}

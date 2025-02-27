"use client";
import { useEffect, useState } from "react";
import { useJobStore } from "@/store/jobStore";
import JobCard from "./JobCard";

const JobList = () => {
  const { jobs, setJobs } = useJobStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading jobs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Find Your Dream Job</h1>

      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-300 animate-pulse h-48 rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;

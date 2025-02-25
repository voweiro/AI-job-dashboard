"use client";

import { useEffect } from "react";
import { useJobStore } from "@/store/jobStore";
import JobCard from "./JobCard";
import jobData from "@/data/jobs.json";

const JobList = () => {
  const { jobs, setJobs } = useJobStore();

  useEffect(() => {
    setJobs(jobData);
  }, [setJobs]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Job Recommendations</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;

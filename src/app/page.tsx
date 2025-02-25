"use client";
import { useEffect, useState } from "react";
import { useJobStore } from "../store/jobStore";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

const JobList = () => {
  const { jobs, setJobs } = useJobStore();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">AI-Powered Job Match</h1>
      {currentJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(jobs.length / jobsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default JobList;

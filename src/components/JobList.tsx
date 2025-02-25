"use client";
import { useEffect } from "react";
import { useJobStore } from "../store/jobStore";

const JobList = () => {
  const { jobs, setJobs } = useJobStore();

  useEffect(() => {
    fetch("/jobs.json") // If saved in `public/`
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error loading jobs:", error));
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} className="p-4 border mb-4">
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <p>{job.salary}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;

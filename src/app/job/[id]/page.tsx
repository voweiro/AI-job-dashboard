"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useJobStore } from "@/store/jobStore";
import ApplyForm from "@/components/ApplyForm";

export default function JobDetails() {
  const { id } = useParams();
  const { jobs } = useJobStore();
  const [isApplying, setIsApplying] = useState(false);

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <p className="text-center text-red-500">Job not found!</p>;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="text-gray-500">{job.salary}</p>
      <ul className="mt-3">
        {job.requiredSkills.map((skill, index) => (
          <li key={index} className="text-blue-600">• {skill}</li>
        ))}
      </ul>

      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={() => setIsApplying(true)}
      >
        Apply Now
      </button>

      {isApplying && <ApplyForm jobTitle={job.title} onClose={() => setIsApplying(false)} />}
    </main>
  );
}

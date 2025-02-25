"use client";
import { useParams } from "next/navigation";
import { useJobStore } from "../../../store/jobStore";
import ApplyForm from "../../../components/ApplyForm";
import { useState } from "react";

const mockUserSkills = ["React", "JavaScript", "Tailwind CSS"]; // Mock user skills

const JobDetails = () => {
  const { id } = useParams();
  const { jobs } = useJobStore();
  const job = jobs.find((j) => j.id === parseInt(id as string));
  const [showWarning, setShowWarning] = useState(false);

  if (!job) return <p>Job not found!</p>;

  // Check if user is missing required skills
  const missingSkills = job.requiredSkills.filter((skill) => !mockUserSkills.includes(skill));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p>{job.company} - {job.location}</p>
      <p className="text-green-600">{job.salary}</p>

      {/* Required Skills */}
      <div className="mt-4">
        <h3 className="font-semibold">Required Skills:</h3>
        <ul className="list-disc pl-5">
          {job.requiredSkills.map((skill) => (
            <li key={skill} className={`${missingSkills.includes(skill) ? "text-red-500" : "text-green-600"}`}>
              {skill} {missingSkills.includes(skill) && "(Missing)"}
            </li>
          ))}
        </ul>
      </div>

      {/* Missing Skills Warning */}
      {missingSkills.length > 0 && showWarning && (
        <div className="bg-yellow-100 border border-yellow-500 text-yellow-700 px-4 py-2 rounded mt-4">
          ⚠️ Warning: You are missing skills in {missingSkills.join(", ")}. Consider upskilling.
        </div>
      )}

      {/* Apply Button */}
      <button
        onClick={() => setShowWarning(true)}
        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Proceed to Apply
      </button>

      {/* Show Apply Form after warning */}
      {showWarning && <ApplyForm jobTitle={job.title} />}
    </div>
  );
};

export default JobDetails;

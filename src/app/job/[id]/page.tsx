"use client";
import { useParams, useRouter } from "next/navigation";
import { useJobStore } from "@/store/jobStore";
import ApplyForm from "@/components/ApplyForm";
import { useEffect } from "react";

const userSkills = ["React", "JavaScript", "CSS"]; // ✅ Simulated user skills

const JobDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { jobs, setJobs } = useJobStore(); // ✅ Ensure `setJobs` is available

  useEffect(() => {
    if (jobs.length === 0) {
      // ✅ Fetch jobs again if store is empty
      fetch("/jobs.json")
        .then((res) => res.json())
        .then((data) => setJobs(data))
        .catch((err) => console.error("Error fetching jobs:", err));
    }
  }, [jobs, setJobs]);

  // ✅ Convert `id` to a number and find the matching job
  const job = jobs.find((j) => j.id === Number(id));

  console.log("Loaded Jobs:", jobs); // 🔍 Debug: Check if jobs are loaded
  console.log("Job ID:", id, "Found Job:", job); // 🔍 Debug: Check if job is found

  if (!job) return <p className="text-center text-red-500 text-lg">⚠️ Job not found!</p>;

  // ✅ Identify missing skills
  const missingSkills = job.requiredSkills.filter(skill => !userSkills.includes(skill));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <button onClick={() => router.back()} className="text-blue-600 hover:underline">
        ← Back to Jobs
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mt-3">{job.title}</h2>
      <p className="text-lg text-gray-600">{job.company} - {job.location}</p>
      <p className="text-green-600 text-xl font-semibold">{job.salary}</p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">Job Description:</h3>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">Required Skills:</h3>
        <ul className="list-disc pl-5 text-gray-800">
          {job.requiredSkills.map((skill) => (
            <li key={skill} className={`${missingSkills.includes(skill) ? "text-red-500 font-medium" : "text-green-600"}`}>
              {skill} {missingSkills.includes(skill) && "(Missing)"}
            </li>
          ))}
        </ul>
      </div>

      {missingSkills.length > 0 && (
        <div className="bg-yellow-100 border border-yellow-500 text-yellow-700 px-4 py-2 rounded mt-4">
          ⚠️ You are missing {missingSkills.join(", ")}. Consider upskilling.
        </div>
      )}

      <ApplyForm jobTitle={job.title} missingSkills={missingSkills} />
    </div>
  );
};

export default JobDetails;

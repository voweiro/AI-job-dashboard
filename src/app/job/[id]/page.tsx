"use client";
import { useParams, useRouter } from "next/navigation";
import { useJobStore } from "@/store/jobStore";
import ApplyForm from "@/components/ApplyForm";

const JobDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { jobs } = useJobStore();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <p className="text-center text-red-500 text-lg">⚠️ Job not found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <button onClick={() => router.back()} className="text-blue-600 hover:underline">
        ← Back to Jobs
      </button>

      <h2 className="text-3xl font-bold text-gray-900 mt-3">{job.title}</h2>
      <p className="text-lg text-gray-600">{job.company} - {job.location}</p>
      <p className="text-green-600 text-xl font-semibold">{job.salary}</p>

      {/* ✅ Job Description Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">Job Description:</h3>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>

      {/* Required Skills */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">Required Skills:</h3>
        <ul className="list-disc pl-5 text-gray-800">
          {job.requiredSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <ApplyForm jobTitle={job.title} />
    </div>
  );
};

export default JobDetails;

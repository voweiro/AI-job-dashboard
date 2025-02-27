"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useJobStore } from "@/store/jobStore";
import ApplyForm from "@/components/ApplyForm";

const userSkills = ["React", "JavaScript", "CSS"]; 

const JobDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { jobs } = useJobStore();
  const [showForm, setShowForm] = useState(false);
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <p className="text-center text-red-500 text-lg">⚠️ Job not found!</p>;


  const missingSkills = job.requiredSkills.filter(skill => !userSkills.includes(skill));

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg border border-gray-200"> 
      
      <button onClick={() => router.back()} className="text-blue-600 hover:underline">
        ← Back to Jobs
      </button>

      <h2 className="text-4xl font-bold text-gray-900 mt-4">{job.title}</h2>
      <p className="text-lg text-gray-600">{job.company} - {job.location}</p>
      <p className="text-green-600 text-xl font-semibold">{job.salary}</p>

     
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-900">Job Description:</h3>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>

    
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-900">Required Skills:</h3>
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

      
      {!showForm && (
        <button
          className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setShowForm(true)}
        >
          Apply Now
        </button>
      )}

      
      {showForm && <ApplyForm jobTitle={job.title} missingSkills={missingSkills} />}
    </div>
  );
};

export default JobDetails;

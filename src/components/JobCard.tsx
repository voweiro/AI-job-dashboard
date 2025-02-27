import { useState } from "react";
import { useRouter } from "next/navigation";
import MatchScore from "./MatchScore";
import ApplyForm from "./ApplyForm";


interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
}

interface JobProps {
  job: Job;
}

const JobCard: React.FC<JobProps> = ({ job }) => {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 border border-gray-200 transition-all duration-300 w-full">
      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="text-green-600 font-medium">{job.salary}</p>

      <MatchScore score={job.matchScore} />

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => router.push(`/job/${job.id}`)}
          className="text-blue-600 hover:underline text-lg"
        >
          View Details →
        </button>
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
          onClick={() => setShowForm(true)}
        >
          Apply Now
        </button>
      </div>

      
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
          
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl"
              onClick={() => setShowForm(false)}
            >
              ✖
            </button>
            
           
            <ApplyForm jobTitle={job.title} missingSkills={job.requiredSkills} />

            <div className="mt-4 flex justify-center">
              <button
                className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-500 transition-all duration-200"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;

import { useRouter } from "next/navigation";
import MatchScore from "./MatchScore";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
  description: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const router = useRouter();

  return (
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-all duration-300 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="text-green-600 font-medium">{job.salary}</p>

    
      <MatchScore score={job.matchScore} />

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => router.push(`/job/${job.id}`)} 
          className="text-blue-600 hover:underline"
        >
          View Details →
        </button>
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
          onClick={() => router.push(`/job/${job.id}`)} 
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;

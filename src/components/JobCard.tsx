import { useRouter } from "next/navigation";
import { calculateMatchScore } from "../utlis/calculateMatchScore";
import { useJobStore } from "@/store/jobStore";
import MatchScore from "@/components/MatchScore";

interface JobProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    requiredSkills: string[];
    matchScore: number;
  };
}

const JobCard: React.FC<JobProps> = ({ job }) => {
  const router = useRouter();
  const { user } = useJobStore();
  const matchScore = calculateMatchScore(user.skills, job.requiredSkills);

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p>{job.company} - {job.location}</p>
      <p className="text-sm text-gray-600">{job.salary}</p>
      <MatchScore score={matchScore} />
      <button 
        onClick={() => router.push(`/job/${job.id}`)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        View Details
      </button>
    </div>
  );
};

export default JobCard;

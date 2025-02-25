import { useRouter } from "next/navigation";

const getMatchScoreColor = (score: number) => {
  if (score >= 80) return "bg-green-500"; // Green for 80%+
  if (score >= 50) return "bg-yellow-500"; // Yellow for 50-79%
  return "bg-red-500"; // Red for below 50%
};

const JobCard = ({ job }) => {
  const router = useRouter();

  return (
    <div className="border p-4 rounded-lg shadow-md my-4">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p>{job.company} - {job.location}</p>
      <p className="text-green-600">{job.salary}</p>

      {/* Match Score Visualization */}
      <div className="mt-3">
        <p>Match Score: {job.matchScore}%</p>
        <div className="w-full bg-gray-300 h-2 rounded">
          <div
            className={`h-2 rounded ${getMatchScoreColor(job.matchScore)}`}
            style={{ width: `${job.matchScore}%` }}
          ></div>
        </div>
      </div>

      <button
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.push(`/job/${job.id}`)}
      >
        View Details
      </button>
    </div>
  );
};

export default JobCard;

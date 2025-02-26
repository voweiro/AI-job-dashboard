interface Props {
  score: number;
}

const MatchScore: React.FC<Props> = ({ score }) => {
  const color = score >= 80 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="mt-3">
      <div className="text-sm font-semibold text-gray-700">Match Score: {score}%</div>
      <div className="w-full bg-gray-300 rounded-full h-3 mt-1">
        <div
          className={`h-3 rounded-full ${color} transition-all duration-500`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MatchScore;

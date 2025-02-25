interface Props {
    score: number;
  }
  
  const MatchScore: React.FC<Props> = ({ score }) => {
    const color = score >= 80 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500";
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div className={`${color} h-4 rounded-full`} style={{ width: `${score}%` }}></div>
      </div>
    );
  };
  
  export default MatchScore;
  
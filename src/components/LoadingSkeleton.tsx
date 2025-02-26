const LoadingSkeleton = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 animate-pulse p-6 rounded-lg shadow-md border border-gray-300"
          >
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="mt-4 h-8 bg-gray-300 rounded w-full"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default LoadingSkeleton;
  
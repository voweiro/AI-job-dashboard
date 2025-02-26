interface PaginationProps {
  currentPage: number; // ✅ Explicitly define as number
  totalPages: number; // ✅ Explicitly define as number
  onPageChange: (page: number) => void; // ✅ Function that takes a number
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-6 flex justify-center space-x-4">
      <button
        className={`px-4  bg-blue-600  rounded-lg hover:bg-green-400 py-2 border ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4  py-2">Page {currentPage} of {totalPages || 1}</span>
      <button
        className={`px-4  bg-blue-600  rounded-lg  hover:bg-green-400 py-2 border ${currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

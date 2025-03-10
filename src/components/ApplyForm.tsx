import { useState } from "react";

interface ApplyFormProps {
  jobTitle: string;
  missingSkills: string[];
}

const ApplyForm: React.FC<ApplyFormProps> = ({ jobTitle, missingSkills }) => {
  const [submitted, setSubmitted] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (missingSkills.length > 0) {
      setShowWarning(true);
      return;
    }

    if (!resume) {
      alert("⚠️ Please upload your resume before submitting.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-lg mx-auto">
      {submitted ? (
        <p className="text-green-600 text-center text-lg font-semibold">✅ Application Successful!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">
            Apply for <span className="text-blue-600">{jobTitle}</span>
          </h3>

        
          {showWarning && (
            <div className="bg-yellow-100 border border-yellow-500 text-yellow-700 px-4 py-2 rounded mb-3">
              ⚠️ You are missing {missingSkills.join(", ")}. You can still apply, but upskilling is recommended.
            </div>
          )}

          <input type="text" placeholder="Full Name" className="border p-3 rounded mb-2" required />
          <input type="email" placeholder="Email" className="border p-3 rounded mb-2" required />
          <input type="text" placeholder="Experience (e.g., 3 years)" className="border p-3 rounded mb-2" required />
          <textarea placeholder="Cover Letter" className="border p-3 rounded mb-2" required />

          
          <label className="mb-2 text-gray-800 font-semibold">Upload Resume (PDF/DOC):</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files?.[0] || null)}
            className="border p-2 rounded mb-4"
            required
          />

          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplyForm;

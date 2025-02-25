import { useState } from "react";

const ApplyForm = ({ jobTitle }) => {
  const [submitted, setSubmitted] = useState(false);
  const [resume, setResume] = useState<File | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resume) {
      alert("Please upload your resume before submitting.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
      {submitted ? (
        <p className="text-green-600 text-center">Application Successful!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Applying for {jobTitle}</h3>
          <input type="text" placeholder="Full Name" className="border p-2 rounded mb-2" required />
          <input type="email" placeholder="Email" className="border p-2 rounded mb-2" required />
          <input type="text" placeholder="Experience (e.g., 3 years)" className="border p-2 rounded mb-2" required />
          <textarea placeholder="Cover Letter" className="border p-2 rounded mb-2" required />
          
          {/* Resume Upload */}
          <label className="mb-2">Upload Resume:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files?.[0] || null)}
            className="border p-2 rounded mb-2"
            required
          />

          <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ApplyForm;

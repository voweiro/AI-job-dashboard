"use client";

import { useState } from "react";

interface ApplyFormProps {
  jobTitle: string;
  onClose: () => void;
}

const ApplyForm: React.FC<ApplyFormProps> = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    coverLetter: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {submitted ? (
          <div className="text-center text-green-600 text-lg font-semibold">
            ✅ Application Successful!
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Apply for {jobTitle}</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />

              {/* Experience */}
              <input
                type="number"
                name="experience"
                placeholder="Years of Experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />

              {/* Cover Letter */}
              <textarea
                name="coverLetter"
                placeholder="Write a short cover letter..."
                required
                value={formData.coverLetter}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplyForm;

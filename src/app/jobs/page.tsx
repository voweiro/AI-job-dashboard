"use client";
import { useEffect, useState } from "react";
import { useJobStore } from "@/store/jobStore";
import JobCard from "@/components/JobCard";
import Pagination from "@/components/Pagination";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function JobsPage() {
  const { jobs, setJobs } = useJobStore();
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const [loading, setLoading] = useState(true);

  // ✅ Search & Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [jobType, setJobType] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await fetch("/jobs.json");
        if (!res.ok) throw new Error("Failed to load jobs");

        const data = await res.json();
        setTimeout(() => {
          setJobs(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error loading jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [setJobs]);

  // ✅ Fix Salary Filtering
  const matchesSalary = (job) => {
    if (!salaryRange) return true;
    const [minSalary, maxSalary] = salaryRange.split("-").map(Number);

    // ✅ Extract numeric salary values from job.salary (e.g., "$60,000 - $80,000")
    const salaryNumbers = job.salary.replace(/\D/g, " ").trim().split(/\s+/).map(Number);
    if (salaryNumbers.length < 2) return false;

    const jobMinSalary = salaryNumbers[0];
    const jobMaxSalary = salaryNumbers[1];

    return jobMinSalary >= minSalary && jobMaxSalary <= maxSalary;
  };

  // ✅ Filtering Jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.requiredSkills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesLocation =
      location === "" || job.location.toLowerCase().includes(location.toLowerCase());

    const matchesJobType =
      jobType === "" || job.title.toLowerCase().includes(jobType.toLowerCase());

    return matchesSearch && matchesLocation && matchesSalary(job) && matchesJobType;
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Browse Available Jobs
      </h1>

      {/* ✅ Search & Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search jobs by title, company, or skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded-md flex-1"
        />

        {/* Location Filter */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 border rounded-md"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="New York, USA">New York, USA</option>
          <option value="London, UK">London, UK</option>
        </select>

        {/* Salary Filter */}
        <select
          value={salaryRange}
          onChange={(e) => setSalaryRange(e.target.value)}
          className="p-3 border rounded-md"
        >
          <option value="">All Salaries</option>
          <option value="40000-60000">40000 - 60000</option>
          <option value="60000-80000">60000 - 80000</option>
          <option value="80000-100000">80000 - 100000</option>
        </select>

        {/* Job Type Filter */}
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="p-3 border rounded-md"
        >
          <option value="">All Job Types</option>
          <option value="Frontend">Frontend Developer</option>
          <option value="Backend">Backend Developer</option>
          <option value="Full Stack">Full Stack Developer</option>
          <option value="UI/UX">UI/UX Designer</option>
        </select>
      </div>

      {/* ✅ Job Listings */}
      {loading ? (
        <LoadingSkeleton />
      ) : currentJobs.length === 0 ? (
        <p className="text-center text-red-500">⚠️ No jobs match your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {/* ✅ Pagination */}
      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredJobs.length / jobsPerPage)}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

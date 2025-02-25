import { create } from "zustand";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
}

interface JobStore {
  jobs: Job[];
}

export const useJobStore = create<JobStore>(() => ({
  jobs: [
    ...Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: `Job Title ${i + 1}`,
      company: `Company ${i + 1}`,
      location: "Remote",
      salary: `$${70_000 + i * 1000} - $${90_000 + i * 1000}`,
      requiredSkills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      matchScore: Math.floor(Math.random() * 100) + 1,
    })),
  ],
}));

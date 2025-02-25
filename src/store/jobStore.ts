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

interface User {
  name: string;
  email: string;
  experience: string;
  coverLetter: string;
  skills: string[];
}

interface JobStore {
  jobs: Job[];
  user: User; // ✅ Ensure user is part of the store
  setJobs: (jobs: Job[]) => void;
  setUser: (user: User) => void;
}

export const useJobStore = create<JobStore>((set) => ({
  jobs: [],
  user: {
    name: "",
    email: "",
    experience: "",
    coverLetter: "",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"], // Default skills
  },
  setJobs: (jobs) => set({ jobs }),
  setUser: (user) => set({ user }),
}));

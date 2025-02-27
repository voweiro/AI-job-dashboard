import { create } from "zustand";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
  description: string;
}

interface JobStore {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
}

export const useJobStore = create<JobStore>((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }) 
}));

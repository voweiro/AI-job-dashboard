export const calculateMatchScore = (userSkills: string[] = [], jobSkills: string[] = []) => {
  if (!Array.isArray(userSkills) || !Array.isArray(jobSkills)) {
    return 0; // Return 0% match if data is missing
  }

  const matchingSkills = userSkills.filter(skill => jobSkills.includes(skill));
  return Math.round((matchingSkills.length / jobSkills.length) * 100);
};

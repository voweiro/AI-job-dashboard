export const calculateMatchScore = (userSkills: string[] = [], jobSkills: string[] = []) => {
  if (!Array.isArray(userSkills) || !Array.isArray(jobSkills)) {
    return 0;
  }

  const matchingSkills = userSkills.filter(skill => jobSkills.includes(skill));
  return Math.round((matchingSkills.length / jobSkills.length) * 100);
};

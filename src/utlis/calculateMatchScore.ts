export const calculateMatchScore = (userSkills: string[], requiredSkills: string[]) => {
    const matchedSkills = userSkills.filter((skill) => requiredSkills.includes(skill));
    return Math.round((matchedSkills.length / requiredSkills.length) * 100);
  };
  
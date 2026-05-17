export type EducationEntry = {
  degree: string;
  institution: string;
  years: string;
  mode: string;
  status: "completed" | "pursuing";
  details?: string;
};

export const education: EducationEntry[] = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Christian College of Engineering & Technology",
    years: "2011 – 2015",
    mode: "Regular (On-campus)",
    status: "completed",
    details:
      "Completed Bachelor of Engineering in Computer Science through a full-time on-campus program.",
  },
  {
    degree: "MCA — Cyber Security",
    institution: "Manipal University, Rajasthan",
    years: "2025 – 2027",
    mode: "Online",
    status: "pursuing",
    details:
      "Master of Computer Applications with specialization in cyber security, pursued online alongside professional work.",
  },
];

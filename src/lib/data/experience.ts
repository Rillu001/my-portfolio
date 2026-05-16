export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "MK Hosting & Solutions",
    role: "Web Designer & Hosting Support",
    period: "2015 – 2018",
    description:
      "Started my career as a web designer and hosting support developer, building business websites, managing hosting systems, and delivering frontend solutions.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "PHP",
      "cPanel",
      "Hosting Management",
    ],
  },
  {
    company: "Caliph Infotech",
    role: "Web Developer",
    period: "2018 – 2021",
    description:
      "Developed web applications, ecommerce platforms, and business websites while supporting graphic design and client-facing deliverables.",
    skills: [
      "Web Development",
      "Ecommerce",
      "PHP",
      "JavaScript",
      "Photoshop",
      "Canva",
    ],
  },
  {
    company: "Ogive Shelters Private Limited",
    role: "Full Stack Developer",
    period: "2021 – 2024",
    description:
      "Built a courier booking and tracking product for agencies using full stack technologies, cloud architecture, and scalable product design.",
    skills: [
      "Python",
      "Firebase",
      "NoSQL",
      "Full Stack",
      "Product Development",
    ],
  },
  {
    company: "AI Care (California)",
    role: "Full Stack Developer",
    period: "2024 – 2026",
    description:
      "Building healthcare facility management products with AI-assisted workflows, modern APIs, and production-grade SaaS architecture.",
    skills: [
      "React Native",
      "Full Stack",
      "AI-assisted Engineering",
      "SaaS",
      "Firebase",
      "APIs",
    ],
  },
];

export type TechCategory = {
  name: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    items: [
      "Python",
      "Django",
      "FastAPI",
      "PHP",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    name: "Mobile",
    items: ["React Native", "Flutter"],
  },
  {
    name: "Database",
    items: ["Firebase", "NoSQL", "Cloud Firestore"],
  },
  {
    name: "AI & Productivity",
    items: [
      "Cursor",
      "ChatGPT",
      "Claude",
      "GitHub Copilot",
      "AI Agents",
    ],
  },
  {
    name: "Tools & Platforms",
    items: [
      "GitHub",
      "Jira",
      "Vercel",
      "cPanel",
      "Docker",
      "Figma",
      "Postman",
      "Hosting Systems",
    ],
  },
];

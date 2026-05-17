export type Project = {
  title: string;
  type?: string;
  description: string;
  techStack: string[];
  url: string;
};

export const projects: Project[] = [
  {
    title: "FICOTOOLS",
    type: "Multi-tool SaaS Platform",
    description:
      "Online toolkit for PDF and image utilities — React frontend with a PHP backend, built for cPanel hosting and ongoing feature expansion.",
    techStack: ["React", "PHP", "Tailwind CSS", "cPanel"],
    url: "https://www.ficotool.com",
  },
  {
    title: "PRBIGround",
    type: "Web Application",
    description:
      "Full-stack web product with a React (Vite) client and PHP REST API, including payments, authentication, and production deployment on cPanel.",
    techStack: ["React", "Vite", "PHP", "Razorpay", "JWT", "REST API"],
    url: "https://www.prbiground.com",
  },
  {
    title: "FinKnots",
    type: "AI FinTech · Android (Beta)",
    description:
      "AI money coach for UPI-first India — auto-tracks UPI, cards, and bank spends from SMS, with manual entry for cash and offline payments, smart categorization, budgets, and savings nudges.",
    techStack: ["React", "Android", "AI", "UPI", "SMS Parsing"],
    url: "https://finknots.com",
  },
  {
    title: "Ihsania",
    type: "Expo Mobile App",
    description:
      "Peaceful Islamic habit tracker for salah, dhikr, Quran habits, and spiritual growth — daily prayer streaks, tasbeeh counter, private journal, silent deeds, and gentle reminders. Offline-first with Expo.",
    techStack: [
      "Expo",
      "React Native",
      "TypeScript",
      "SQLite",
      "NativeWind",
      "Zustand",
    ],
    url: "https://github.com/Rillu001/Ihsania",
  },
];

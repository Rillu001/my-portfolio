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
];

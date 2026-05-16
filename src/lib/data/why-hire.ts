import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Layers,
  MessageCircle,
  Palette,
  Puzzle,
  Rocket,
  Sparkles,
  Wrench,
  Zap,
  Cloud,
} from "lucide-react";

export type WhyHirePoint = {
  title: string;
  icon: LucideIcon;
  span?: "wide" | "tall";
};

export const whyHirePoints: WhyHirePoint[] = [
  { title: "10+ Years Industry Experience", icon: Zap, span: "wide" },
  { title: "Startup & Product Development Mindset", icon: Rocket },
  { title: "AI-Assisted Rapid Development Workflow", icon: Sparkles },
  { title: "Fast Adaptation to Modern Technologies", icon: Brain },
  { title: "Full Stack Development Expertise", icon: Layers },
  { title: "SaaS & Automation Experience", icon: Cloud },
  { title: "Clean UI/UX Focus", icon: Palette },
  { title: "Strong Communication Skills", icon: MessageCircle },
  { title: "Problem Solving Ability", icon: Puzzle },
  { title: "Modern Engineering Workflow", icon: Wrench },
];

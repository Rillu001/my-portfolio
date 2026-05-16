import type { LucideIcon } from "lucide-react";
import {
  Bot,
  GitBranch,
  MessageSquare,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";

export type AITool = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const aiWorkflowDescription =
  "Leveraging modern AI-assisted engineering workflows to accelerate product development, automate repetitive tasks, improve debugging efficiency, optimize architecture, and rapidly build scalable applications.";

export const aiTools: AITool[] = [
  {
    name: "Cursor",
    description: "AI-native IDE for rapid, context-aware development.",
    icon: Terminal,
  },
  {
    name: "ChatGPT",
    description: "Conversational AI for ideation, debugging, and documentation.",
    icon: MessageSquare,
  },
  {
    name: "Claude",
    description: "Advanced reasoning for architecture and complex problem solving.",
    icon: Sparkles,
  },
  {
    name: "GitHub Copilot",
    description: "Inline code suggestions and autocomplete acceleration.",
    icon: GitBranch,
  },
  {
    name: "AI Agents",
    description: "Autonomous workflows for multi-step engineering tasks.",
    icon: Bot,
  },
  {
    name: "Automation Workflows",
    description: "Pipelines that eliminate repetitive development overhead.",
    icon: Workflow,
  },
];

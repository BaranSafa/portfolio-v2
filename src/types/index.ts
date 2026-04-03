export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "ai" | "web" | "all";
  github?: string;
  demo?: string;
  featured: boolean;
  gradient: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  gradient: string;
  skills: Skill[];
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "experience";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  tech: string[];
  budget?: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  placeholder?: boolean;
}

export interface Certification {
  institution: string;
  credential: string;
  year: string;
  logo?: string;
}

export interface TimelineItem {
  year: number;
  endYear?: number;
  title: string;
  organisation: string;
  type: "experience" | "education";
  description?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  cta?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  slug: string;
  placeholder?: boolean;
}

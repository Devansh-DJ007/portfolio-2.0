export type FrontPage = {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  photo: string;
  roles: string[];
  description: string;
  resumeURL: string;
  location: string;
  email: string;
  available: boolean;
  about: string;
};

export type Social = {
  _id: string;
  title: string;
  url: string;
};

export type Skill = {
  _id: string;
  title: string;
  image: string;
};

export type Experience = {
  _id: string;
  company: string;
  image: string;
  position: string;
  timeline: string;
  type: "full-time" | "internship" | "chapter";
  description: string;
  highlights: string[];
  skills: string[];
};

export type Project = {
  _id: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export type TechCategory = {
  _id: string;
  category: string;
  items: Techstack[];
};

export type Techstack = {
  _id: string;
  title: string;
  image: string;
};

export type Achievement = {
  _id: string;
  title: string;
  org: string;
  description: string;
  year: string;
  icon: string;
};

export type Photo = {
  _id: string;
  src: string;
  location: string;
  rotate: number;
};

export type Game = {
  _id: string;
  name: string;
  logo: string;
  playerName: string;
  level: string;
  stats: { label: string; value: string }[];
  color: string;
};

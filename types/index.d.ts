export type NavItem = {
  title: string;
  href: string;
  active?: boolean;
};

export type Experience = {
  title: string;
  companyName: string;
  icon: string;
  date: string;
  points: string[];
};

export type Skill = {
  title: string;
  icon: string;
};

export type Project = {};
type Tag = {
  name: string;
  color: string;
};

type Project = {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
};

export const projects: Project[] = [
  // Array of Project objects
];

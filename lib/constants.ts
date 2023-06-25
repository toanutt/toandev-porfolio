import { NavItem, Experience, Skill } from "@/types";
import nippon from "./../public/company_icon/nippon-steel.png";
import tandt from "./../public/company_icon/t-and-t-company.png";

import web from "./../public/skills_icon/web.png";
import backend from "./../public/skills_icon/backend.png";
import creator from "./../public/skills_icon/creator.png";
import mobile from "./../public/skills_icon/mobile.png";

export const ListNavItem: NavItem[] = [
  { title: "Home ", href: "/home", active: false },
  { title: "Experience ", href: "/experience", active: false },
  { title: "Project ", href: "/project", active: false },
  { title: "Resume ", href: "/resume", active: false },
];

export const experiences: Experience[] = [
  {
    title: "React.js Developer",
    companyName: "T&T Design Company",
    icon: tandt,
    // iconBg: "#383E56",
    date: "March 2021 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Developer",
    companyName: "Nippon Steel Metal Products Vietnam",
    icon: nippon,
    // iconBg: "#383E56",
    date: "August 2018 - December 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const skills: Skill[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export const projects: Project[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link: "https://github.com/",
  },
];

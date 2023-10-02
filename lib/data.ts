import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import StockPage from "@/public/llicenta_buyStock_page.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School Diploma",
    location: "Bucharest ,Romania",
    description:
      "Graduated from high school with a focus on mathematics and computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "Bachelor's Degree",
    location: "Bucharest, Romania",
    description:
      "I graduated from the Faculty of Computer Science at the University Politehnica of Bucharest, where my paper centered around the development of a web application that served as a stock trading platform.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Email Marketing Specialist",
    location: "Bucharest, Romania",
    description:
      "Currently working as an Email Marketing Specialist where I am responsible for the development, and I mostly use HTML, Python and Linux",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Trading Platform",
    description:
      "The application has a user interface that allows users to buy and sell stocks, and a backend that handles the transactions and stores the data.",
    tags: ["Python", "Django", "HTML", "CSS", "SQLite", "Javascript"],
    imageUrl: StockPage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "Python",
  "Django",
  "Framer Motion",
  "C",
  "Linux",
  "Shell Scripting",
] as const;
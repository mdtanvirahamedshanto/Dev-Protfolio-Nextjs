import alarmClockImg from "@/public/alarm-clock.png";
import weatherImg from "@/public/weather.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

// Skills...

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

// Experience

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Barishal",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Kalapara, Patuakhali",
    description:
      "I worked as a front-end developer for 1 year. I also learn to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present ",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

// Project

export const projectsData = [
  {
    title: "Alarm Clock",
    description:
      " Feature- Analog Clock  Digital Clock  Date: day--Year--Month  Set Alarm  Eyes moving on mousemove event",
    tags: ["React", "React Context", "CSS"],
    imageUrl: alarmClockImg,
    live: "https://digitalalarmclockinreact.netlify.app/",
    code: "https://github.com/mdtanvirahamedshanto/Alarm-Clock-in-React",
  },
  {
    title: "Weather App",
    description: "A Simple Weather App , Show Current Weather in details.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: weatherImg,
    live: "https://weatherwebsitebyshanto.netlify.app/",
    code: "https://github.com/mdtanvirahamedshanto/Weather-Website",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  //   live: "https://www.facebook.com",
  //   code: "https://www.github.com/mdtanvirahamedshanto",
  // },
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
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;

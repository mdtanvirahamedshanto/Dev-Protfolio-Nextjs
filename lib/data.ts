import Eventry from "@/public/eventry.png";
import PhootFeed from "@/public/photoFeed.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaHtml5, FaTools } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    title: "Eventry Booking App",
    description:
      "A Full Stack MERN Application for booking events. Users can book events, view their bookings, and cancel them.",
    tags: ["Next.js", "Tailwind Css", "CSS", "javascript"],
    imageUrl: Eventry,
    live: "https://project-eventry-nextjs.vercel.app/",
    code: "https://github.com/mdtanvirahamedshanto/project-eventry-nextjs.git ",
  },
  {
    title: "Photo Feed Website",
    description:
      "A simple website that shows photos from an API Emplement Internasolization entercepting routing .",
    tags: ["Next.js", "Tailwind Css", "JavaScript"],
    imageUrl: PhootFeed,
    live: "https://photofeed-nextjs.vercel.app/",
    code: "https://github.com/mdtanvirahamedshanto/photofeed-nextjs.git",
  },
] as const;

// Skills...

export const skills = [
  {
    icon: React.createElement(FaHtml5),
    title: "FrontEnd",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "NextJs",
      "TailwindCSS",
      "OAuth2",
      "APIs",
      "MaterialUI",
    ],
  },
  {
    icon: React.createElement(FaCode),
    title: "BackEnd",
    skills: [
      "NodeJS",
      "Express",
      "MySQL",
      "MongoDB",
      "Mongoose",
      "RestAPI",
      "Python",
      "PostgreSQL",
      "GraphQL",
      "Prisma",
    ],
  },
  {
    icon: React.createElement(FaTools),
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Heroku",
      "Netlify",
      "VSCode",
      "Postman",
      "Webpack",
      "TypeScript",
      "SEO",
      "Vercel",
    ],
  },
] as const;

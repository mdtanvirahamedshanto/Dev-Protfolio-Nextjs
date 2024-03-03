"use client";

import { allProjectsData } from "@/lib/data";
// import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaCode } from "react-icons/fa6";
import { HiGlobeAlt } from "react-icons/hi";

type ProjectProps = (typeof allProjectsData)[number];

export default function AllProject({
  title,
  description,
  tags,
  imageUrl,
  live,
  code,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 mb-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap justify-center gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="pt-4 mt-4 flex flex-row justify-center gap-3">
            <a href={live} target="_blank">
              <button className="bg-[#3c75ad] flex justify-center gap-2 w-20 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-[#20486fd0] hover:opacity-75 hover:scale-105 hover:transition ">
                Live{" "}
                <i className="mt-[3px] text-xs text-white">
                  <HiGlobeAlt className="text-white" />
                </i>
              </button>
            </a>
            <a href={code} target="_blank">
              <button className="bg-[#359d58] flex justify-center gap-2 px-3 py-1 w-20 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-[#1b6032d4] hover:opacity-75 hover:scale-105 hover:transition">
                Code{" "}
                <i className="mt-[3px] text-xs">
                  <FaCode />
                </i>
              </button>
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

"use client";
import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[75rem] scroll-mt-28 text-center sm:mb-40"
    >
      <div
        id="skills"
        className="px-4 py-16 mx-auto sm:max-w-[36rem] md:max-w-full lg:max-w-[1280px] md:px-24 lg:px-8 lg:py-20"
      >
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">
                <SectionHeading>My Skills</SectionHeading>
              </span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24 dark:bg-gray-900">
                <motion.i
                  className=" text-4xl text-blue-700"
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                >
                  {skill.icon}
                </motion.i>
              </div>
              <motion.h6
                className="mb-2 font-semibold leading-5 border-b-2 pb-4"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {skill.title}
              </motion.h6>
              <span className="flex flex-wrap space-x-2 mt-5">
                {skill.skills.map((item, index) => (
                  <motion.p
                    key={index}
                    className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full dark:text-white/70 dark:bg-gray-500"
                    // "bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={index}
                  >
                    {item}
                  </motion.p>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

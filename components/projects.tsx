"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex pt-4 text-left justify-end">
        <a href="/All-Projects">
          <button
            className="group bg-white px-7 py-3 flex w-40 text-left items-left gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            type="button"
          >
            See More
          </button>
        </a>
      </div>
    </section>
  );
}

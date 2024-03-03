"use client";

// import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
// import Project from "./project";
import { daynamicProject, staticProject } from "@/lib/projectData";
import SectionHeading from "../section-heading";
import AllProject from "./AllProject";
// import SectionHeading from "./section-heading";

export function AllProjectsD() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Daynamic Website</SectionHeading>
      <div>
        {daynamicProject.map((project, index) => (
          <React.Fragment key={index}>
            <AllProject {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
export function AllProjectsS() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Static Website</SectionHeading>
      <div>
        {staticProject.map((project, index) => (
          <React.Fragment key={index}>
            <AllProject {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

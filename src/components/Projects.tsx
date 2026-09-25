"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import Project from "./Project";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="work">
      <Reveal>
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="meta mb-6">02 / Selected Work</p>

            <h2 className="section-titile">
              SELECTED
              <br />
              WORK.
            </h2>
          </div>

          <span className="meta hidden md:block">
            {projects.length.toString().padStart(2, "0")} Project
          </span>
        </div>
      </Reveal>

      <div className="space-y-28 md:space-y-40">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 0.05}>
            <Project {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

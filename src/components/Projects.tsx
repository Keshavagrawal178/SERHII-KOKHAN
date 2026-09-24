"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import Project from "./Project";

const projects = [
  {
    number: "01",
    title: "Project One",
    description: "Interactive web experience",
  },
  {
    number: "02",
    title: "Project Two",
    description: "Digital product and interface",
  },
  {
    number: "03",
    title: "Project Three",
    description: "Frontend development",
  },
];

export default function Projects() {
  return (
    <Section>
      <Reveal>
        <div className="mb-20 flex items-end justify-between">
          <h2 className="section-title">Selected Work</h2>

          <span className="meta hidden md:block">03 Projects</span>
        </div>
      </Reveal>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 0.05}>
            <Project {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import "../css/projects.css";

const projects: Project[] = [
  {
    title: "RGB Generator",
    description: "Documentation for my Minecraft RGB Generator.",
    repo: "PetarMc1/rgb-generator",
    link: "/generators/rgb-generator",
  },
  {
    title: "Font Generator",
    description: "Documentation for my Minecraft Font Generator.",
    repo: "PetarMc1/font-generator",
    link: "/generators/font-generator",
  },
];

function Project(project: Project) {
  return (
    <div className={"project"}>
      <div className={"flex"}>
        <Link
          className={clsx("projectGitHub")}
          to={`https://github.com/${project.repo}`}
        >
          {project.title}
        </Link>
        <p>{project.description}</p>
      </div>
      <div>
        <Link
          className={clsx("button button--primary")}
          to={project.link}
        >
          Go
        </Link>
      </div>
    </div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <section className={"projects"}>
      <div className={"projectsContainer"}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  repo: string;
  link: string;
}

import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import ArchiveIcon from "@site/static/img/ArchveIcon.svg";
import "../css/project.css";

const projects: Project[] = [
  {
    title: "Fish Tracker",
    description: "The fish tracker is a project for CosmosMC that tracks all fish caught by players.",
    repo: "PetarMc1/fish-tracker",
    link: "/fish-tracker",
  },
  {
    title: "Fish Tracker Mod",
    description:"The fish tracker is a project for CosmosMC that tracks all fish caught by players.",
    repo: "PetarMc1/fish-tracker-mod",
    link: "/fish-tracker/mod",
  },
  {
    title: "PetarLib",
    description: "Library for all my minecraft mods. ",
    repo: "PetarMc1/PetarLib",
    link: "/petarlib",
  },
  {
    title: "Minecraft Items API v2",
    description: "Documentation for the Minecraft Items API v2 project.",
    repo: "PetarMc1/minecraft-items-api-v2",
    link: "/mc-api",
  },
    {
    title: "Duration Parser",
    description: "Documentation for the Duration Parser project.",
    repo: "PetarMc1/duration-parser",
    link: "/duration-parser",
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
          {project.eol && <ArchiveIcon className={"projectIcon"} />}
        </Link>
        <p>{project.description}</p>
      </div>
      <div>
        <Link className={clsx("button button--primary")} to={project.link}>
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
  eol?: boolean;
}

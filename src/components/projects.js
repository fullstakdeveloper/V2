import React from "react";
import {
  ProjectsContainer,
  Heading,
  ProjectsGrid,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  GitHubButton
} from "../styles/projectStyle.js";

const projects = [
  {
    title: "Protivity",
    description:
      "A productivity-boosting website that simplifies task management with visual aids like bar and pie graphs, helping users stay organized efficiently.",
    github: "https://github.com/yourusername/protivity"
  },
  {
    title: "CCC Problem Solutions",
    description:
      "A collection of well-documented solutions for Canadian Computing Competition (CCC) problems, featuring optimized solutions and explanations.",
    github: "https://github.com/yourusername/ccc-solutions"
  },
  {
    title: "ShopDog",
    description:
      "A cashierless store system using RFID and Stripe for seamless transactions. 2nd place winner at NeoDeveloper League 2024.",
    github: "https://github.com/yourusername/shopdog"
  }
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Heading>My Projects</Heading>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <GitHubButton href={project.github} target="_blank">
              View on GitHub
            </GitHubButton>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;

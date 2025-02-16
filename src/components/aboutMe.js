import React from "react";
import {
  AboutContainer,
  Heading,
  BioText,
  SkillsContainer,
  SkillBadge,
  IconWrapper
} from "../styles/aboutMeStyle.js";

import { FaJs, FaReact, FaPython, FaCode, FaHtml5, FaCss3Alt } from "react-icons/fa";

const AboutMe = () => {
  return (
    <AboutContainer>
      <Heading>About Me</Heading>

      <BioText>
        Jashan is a "curious and motivated individual" who developed programming skills from his "childhood love for Lego building".
        With sharp attention to detail and a passion for "problem-solving", he expertly transformed "simple bricks into intricate structures",
        applying coding principles to bring his creations to life.
      </BioText>

      <BioText>
        His "programming journey" began when his father "enrolled him in a web development course". What started as a small step "turned into an adventure",
        leading him to "Python, JavaScript, and React". With each project, Jashan explores the "artistry in simplicity" and the "logic in complexity".
      </BioText>

      <BioText>
        "Join him on this journey**, where every click and scroll "tells a story of growth, mastery, and the limitless potential of programming."
      </BioText>

      {/* Skills Section */}
      <SkillsContainer>
        <SkillBadge>
          <IconWrapper><FaJs /></IconWrapper> JavaScript
        </SkillBadge>
        <SkillBadge>
          <IconWrapper><FaReact /></IconWrapper> React.js
        </SkillBadge>
        <SkillBadge>
          <IconWrapper><FaPython /></IconWrapper> Python
        </SkillBadge>
        <SkillBadge>
          <IconWrapper><FaHtml5 /></IconWrapper> HTML
        </SkillBadge>
        <SkillBadge>
          <IconWrapper><FaCss3Alt /></IconWrapper> CSS
        </SkillBadge>
        <SkillBadge>
          <IconWrapper><FaCode /></IconWrapper> Problem Solving
        </SkillBadge>
      </SkillsContainer>
    </AboutContainer>
  );
};

export default AboutMe;

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
        I am a <b>curious and motivated individual</b> who developed programming skills from my <b>childhood love for Lego building</b>.
        With sharp attention to detail and a passion for <b>problem-solving</b>, I expertly transformed simple bricks into intricate structures,
        applying coding principles to bring my creations to life.
      </BioText>

      <BioText>
        My programming journey began when I enrolled into a <b>web-development</b> course. What started as a small step <b>turned into an adventure,
        leading me to</b> Python, JavaScript, and React. With each project, I explore the <b>artistry in simplicity</b> and the <b>logic in complexity</b>.
      </BioText>

      <BioText>
        <b>Join me on this journey</b>, where every click and scroll <b>tells a story of growth, mastery, and the limitless potential of programming.</b>
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

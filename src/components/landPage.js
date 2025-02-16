import React from "react";
import {
  LandingContainer,
  LeftSection,
  RightSection,
  ProfileImage,
  Heading,
  SubHeading,
  SocialLinks,
  SocialButton
} from "../styles/landPageStyle.js";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const LandingPage = () => {
  return (
    <LandingContainer>
      {/* Left Section - Text */}
      <LeftSection>
        <Heading>Welcome to My World</Heading>
        <SubHeading>
          Hi, I'm Jashan Singh, a passionate "Full Stack Developer & Problem Solver". 
          I create web applications that blend **creativity and technology** to deliver smooth, high-quality user experiences.
        </SubHeading>
        <SubHeading>
          Explore my journey through programming, where every project and every challenge shapes me into a better developer.
        </SubHeading>

        {/* Social Links */}
        <SocialLinks>
          <SocialButton href="https://github.com/" target="_blank">
            <FaGithub />
          </SocialButton>
          <SocialButton href="https://linkedin.com/" target="_blank">
            <FaLinkedin />
          </SocialButton>
          <SocialButton href="https://instagram.com/" target="_blank">
            <FaInstagram />
          </SocialButton>
          <SocialButton href="mailto:your@email.com">
            <FaEnvelope />
          </SocialButton>
        </SocialLinks>
      </LeftSection>

      {/* Right Section - Profile Image */}
      <RightSection>
        <ProfileImage src="/me.jpeg" alt="Profile" />
      </RightSection>
    </LandingContainer>
  );
};

export default LandingPage;

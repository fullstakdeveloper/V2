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
        Hi, I'm Jashan Singh, a passionate <b>Full Stack Developer & Problem Solver</b> dedicated to building dynamic web applications that seamlessly merge <b>creativity and technology</b> for intuitive, high-quality user experiences.
        </SubHeading>
        <SubHeading>
          Explore my journey through programming, where every project and every challenge shapes me into a better developer.
        </SubHeading>

        {/* Social Links */}
        <SocialLinks>
          <SocialButton href="https://github.com/fullstakdeveloper" target="_blank">
            <FaGithub />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/jashan-singh-48b9592a0/" target="_blank">
            <FaLinkedin />
          </SocialButton>
          <SocialButton href="https://www.instagram.com/jashan_singh1437/" target="_blank">
            <FaInstagram />
          </SocialButton>
          <SocialButton href="mailto:pupru.edu2k7@gmail.com">
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

import React from "react";
import {
  ResumeContainer,
  Heading,
  Section,
  SectionTitle,
  SectionText,
  DownloadButton
} from "../styles/resumeStyle.js";

const Resume = () => {
  return (
    <ResumeContainer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Heading>My Resume</Heading>

      {/* Education Section */}
      <Section>
        <SectionTitle>Education</SectionTitle>
        <SectionText>
          <strong>Laurel Heights Secondary School</strong> - High School Student (Sep 2021 – Current)
        </SectionText>
        <SectionText>
          <strong>Google Crash Course on Python</strong> (Nov 2023 – Dec 2023)  
          Learned automation, Python structures, and scripting.
        </SectionText>
        <SectionText>
          <strong>Facebook Advanced React</strong> (Sep 2024 – Current)  
          Gaining expertise in React Testing Library, reusable components, and React best practices.
        </SectionText>
      </Section>

      {/* Experience Section */}
      <Section>
        <SectionTitle>Experience</SectionTitle>
        <SectionText>
          <strong>Youth Tech Labs</strong> (Apr 2024 – Sep 2024)  
          Website Manager/AI Challenges Developer - Organized website redesign and developed AI challenges.
        </SectionText>
        <SectionText>
          <strong>Sera4</strong> (Sept 2024 – Current)  
          Software Engineering Intern - Fixing front-end bugs, optimizing UI, and improving performance.
        </SectionText>
      </Section>

      {/* Download Button */}
      <DownloadButton href="/assets/resume.pdf" download="Jashan_Resume.pdf">
        Download Resume
      </DownloadButton>
    </ResumeContainer>
  );
};

export default Resume;

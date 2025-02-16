import styled from "@emotion/styled";

// About Me Main Container
export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 100px auto;
  text-align: center;
  padding: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

// Animated Heading
export const Heading = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  background: linear-gradient(135deg, #BF40BF, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Bio Paragraph
export const BioText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 20px;
`;

// Skills Section
export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

// Skill Badge
export const SkillBadge = styled.span`
  background: rgba(255, 255, 255, 0.15);
  padding: 10px 18px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Icons for Skills
export const IconWrapper = styled.span`
  font-size: 1.3rem;
  color: #FFD700;
`;

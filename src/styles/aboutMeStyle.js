import styled from "@emotion/styled";

// About Me Main Container
export const AboutContainer = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 95%;
    margin: 30px auto;
    padding: 25px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    font-size: 14px;
    width: calc(100% - 30px); /* Prevents left-side cutoff */
    margin: 20px auto 0; /* Ensures it doesn’t push too far to the left */
    border-radius: 8px;
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

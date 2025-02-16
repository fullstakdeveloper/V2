import styled from "@emotion/styled";
import { motion } from "framer-motion"; // ✅ Import motion for animations

// Resume Page Container
export const ResumeContainer = styled(motion.div)`
  width: 100%;
  max-width: 850px;
  margin: 100px auto;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.15);
  color: white;

  @media (max-width: 768px) {
    padding: 30px;
    margin: 80px auto;
    width: 90%;
    border-radius: 18px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin: 60px auto 0;  /* Adjusted margin to prevent left-side issues */
    width: calc(100% - 30px); /* Ensures it does not touch the edges */
    border-radius: 15px;
    box-shadow: 0px 3px 10px rgba(255, 255, 255, 0.1);
  }
`;



// Animated Heading
export const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #BF40BF, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Resume Sections
export const Section = styled(motion.div)`
  text-align: left;
  margin-top: 30px;
  padding: 20px;
  border-left: 4px solid #FFD700;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  padding: 20px;
`;

// Resume Section Title
export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #FFD700;
  margin-bottom: 10px;
`;

// Resume Text
export const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #e0e0e0;
`;

// Download Button
export const DownloadButton = styled(motion.a)`
  display: inline-block;
  margin-top: 30px;
  padding: 12px 20px;
  border-radius: 10px;
  border: 2px solid #FFD700;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: #FFD700;
    color: #1B1B3A;
  }
`;

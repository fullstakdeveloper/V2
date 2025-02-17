import styled from "@emotion/styled";

// Main Projects Page Container
export const ProjectsContainer = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
  text-align: center;
  padding: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  color: white;

  @media (max-width: 790px) {
    padding: 40px;
    margin: 70px auto;
    width: 90%;
    border-radius: 18px;
  }

  @media (max-width: 500px) {
    padding: 25px;
    margin: 50px auto 0; 
    width: 90%; 
    max-width: 90%; 
    border-radius: 15px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;




// Heading with Gradient Effect
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

// Project Cards Container
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

// Individual Project Card
export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.2);
  }
`;

// Project Title
export const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: #FFD700;
  margin-bottom: 10px;
`;

// Project Description
export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

// GitHub Link Button
export const GitHubButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #FFD700;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: #FFD700;
    color: #1B1B3A;
  }
`;

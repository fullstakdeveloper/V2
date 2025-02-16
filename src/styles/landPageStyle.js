import styled from "@emotion/styled";

// Landing Page Main Container
export const LandingContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }
`;

// Left Section (Text Content)
export const LeftSection = styled.div`
  flex: 1;
  padding-right: 40px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

// Right Section (Profile Image)
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Profile Image
export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

// Animated Heading
export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(135deg, #BF40BF, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Subheading Text
export const SubHeading = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

// Social Links Container
export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// Social Button
export const SocialButton = styled.a`
  color: white;
  font-size: 1.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700;
  }
`;

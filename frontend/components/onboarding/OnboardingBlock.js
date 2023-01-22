import styled from "styled-components";
import { useState } from "react";

const IconContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #D9D9D9;
  ${props => props.selected && `
    outline: 1px solid blue;
  
  `}
`;

const OnboardingBlockContainer = styled.div`
  flex-direction: column;
  text-align: center;
`;

const OnboardingBlock = ({ value, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected)
  }
  return (
    <OnboardingBlockContainer onClick={handleClick}>
      <IconContainer selected={isSelected}/>
      {value}
    </OnboardingBlockContainer>
  );
};

export default OnboardingBlock;

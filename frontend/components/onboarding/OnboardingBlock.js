import styled from "styled-components";
import { useState } from "react";

const IconContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #f1f1f1;
  ${props => props.selected && `
    background: #4d6bf3;
    color: white;
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
    onSelect(value)
  }
  return (
      <IconContainer selected={isSelected} onClick={handleClick}>{value}</IconContainer>
  );
};

export default OnboardingBlock;

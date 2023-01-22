import React from "react";
import styled from "styled-components";

const SButton = styled.button`
  border: none;
  color: white;
  background-color: ${props => props.disabled ? "#E0E0E0" : "black"};
  display: flex;
  padding: 15px 20px;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

function Button({onClick, children, disabled}) {
  return (
    <div>
      <SButton onClick={onClick} disabled={disabled}>
        {children}
      </SButton>
    </div>
  );
}

export default Button;

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 4rem;
  max-width: 4rem;
  height: 6vh;
  justify-content: space-evenly;
`;

function NavButton(props) {
  //Button
  //Text
  //Icon
  //onClick()
  return (
    <div>
      <Button>
        {props.children}
        {props.text}
      </Button>
    </div>
  );
}

export default NavButton;

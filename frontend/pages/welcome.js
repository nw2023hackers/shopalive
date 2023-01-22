import React from "react";
import styled from "styled-components";
import Router from "next/router";

const WelcomeContainer = styled.div`
  text-align: center;
  margin: auto;
`;

const WelcomeBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin: 45vh 0 45vh 0;
`;

const WelcomeBtn = styled.button`
  padding: 10px 20px;

  border-radius: 10px;
  border: none;
`;

function welcome() {
  return (
    <WelcomeContainer>
      <WelcomeBtns>
        <WelcomeBtn onClick={() => Router.push("/onboarding")}>
          I want to browse
        </WelcomeBtn>
        <WelcomeBtn
          onClick={() =>
            Router.push({
              /* LINK STREAM PAGE */
            })
          }
        >
          I want to sell
        </WelcomeBtn>
      </WelcomeBtns>
    </WelcomeContainer>
  );
}

export default welcome;

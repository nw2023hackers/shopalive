"use client";

import styled from "styled-components";
import OnboardingBlock from "../components/onboarding/OnboardingBlock";
import { useState } from "react";

const OnboardingContainer = styled.div`
  display: flex,
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TopicsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: auto auto auto;
`

const topicOptions = [
  {
    icon: "",
    value: "Clothes"
  },
  {
    icon: "",
    value: "Computers"
  },
  {
    icon: "",
    value: "Clothes"
  },
  {
    icon: "",
    value: "Computers"
  },
  {
    icon: "",
    value: "Clothes"
  },
  {
    icon: "",
    value: "Computers"
  },    
]

export default function Page() {
  const [selected, setSelected] = useState([])
  
  const handleSelect = () => {
    setSelected([...selected, ])
  }

  return (
    <OnboardingContainer>
      <h1>Select topics that interest you</h1>
      <p>Select at least 3</p>
      <TopicsContainer>
        {topicOptions.map((topic, i) => {
          return(
            <OnboardingBlock key={i} value={topic.value} onSelect={handleSelect}/>
          )
        })}
      </TopicsContainer>
    </OnboardingContainer>
  );
}

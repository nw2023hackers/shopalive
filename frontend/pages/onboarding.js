"use client";

import styled from "styled-components";
import OnboardingBlock from "../components/onboarding/OnboardingBlock";
import Button from "../components/Button";
import { useState } from "react";
import Router from 'next/router'

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  gap: 2em;
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
    value: "Audio"
  },
  {
    icon: "",
    value: "Home"
  },
  {
    icon: "",
    value: "Kitchen"
  },
  {
    icon: "",
    value: "Garden"
  },    
]

export default function Page() {
  const [selected, setSelected] = useState(new Set([]))
  
  const handleSelect = (value) => {
    const newSelected = new Set(selected)
    if(newSelected.has(value)) {
      newSelected.delete(value)
    } else {
      newSelected.add(value)
    }
    setSelected(newSelected)
  }

  const handleStartShopping = () => {
    Router.push("/home")
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
      <Button onClick={handleStartShopping} disabled={selected.size < 3}>Start shopping</Button>
    </OnboardingContainer>
  );
}

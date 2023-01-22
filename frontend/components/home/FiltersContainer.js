import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Button = styled.button`
  background: none;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  align-items: center;

  font-size: 0.6rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #e0e0e0;
`;

function FiltersContainer({ icon, text, icon2, href }) {
  return (
    <Link href={href}>
      <Button>
        {icon}
        {text}
        {icon2}
      </Button>
    </Link>
  );
}

export default FiltersContainer;

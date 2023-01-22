import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
  min-width: 4rem;
  max-width: 4rem;
  margin-left: 10px;

  font-size: 0.7rem;
`;

function logins({ icon }) {
  return (
    <Button>
      <Image src={icon} alt="" width={50} height={50} />
    </Button>
  );
}

export default logins;

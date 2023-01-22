import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 3rem;
  max-width: 3rem;

  font-size: 0.6rem;
`;

function CatBtn({ icon, text, href }) {
  return (
    <Link href={href}>
      <Button>
        <Image src={icon} alt="" width={30} height={30} />
        {text}
      </Button>
    </Link>
  );
}

export default CatBtn;

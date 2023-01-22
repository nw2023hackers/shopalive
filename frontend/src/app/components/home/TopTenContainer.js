import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const TopTenDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;

  min-width: 7rem;
  max-width: 7rem;
  margin: 10px 0px 10px 10px;

  // border: 1px solid #e0e0e0;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

const Desc = styled.div`
  font-size: 0.7rem;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1rem;
  float: right;
`;

function TopTenComponent({ picture, title, desc, price, href }) {
  return (
    <TopTenDiv>
      <Link href={href}>
        <Image src={picture} alt="" width={110} height={110} />
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Price>{price}</Price>
      </Link>
    </TopTenDiv>
  );
}

export default TopTenComponent;

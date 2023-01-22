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

const ImageContainer = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.2rem;
  width: 6.5rem;

  margin: auto;
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

function TopTenContainer({ picture, title, desc, price, href }) {
  return (
    <TopTenDiv>
      <Link href={href}>
        <ImageContainer>
          <Image src={picture} alt="" width={110} height={120} />
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <Price>{price}</Price>
        </InfoContainer>
      </Link>
    </TopTenDiv>
  );
}

export default TopTenContainer;

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const TopTenDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-family: "Roboto", sans-serif;

  min-width: 7rem;
  max-width: 7rem;
  margin-left: 10px;
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
  font-size: 14px;
`;

const Desc = styled.div`
  font-size: 11px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 14px;
  float: right;
`;

function TopTenContainer({ picture, title, desc, price, href }) {
  return (
    <Link href={href}>
      <TopTenDiv>
        <ImageContainer>
          <Image src={picture} alt="" width={110} height={120} />
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <Price>{price}</Price>
        </InfoContainer>
      </TopTenDiv>
    </Link>
  );
}

export default TopTenContainer;

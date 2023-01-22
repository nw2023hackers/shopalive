import React from "react";
import styled from "styled-components";
import FeedDescription from "./FeedDescription";

const ProductWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
`;

const TextContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 80px;
  padding-right: 12px;
  padding-left: 88px;
  justify-content: space-around;
`;
const ThumbnailImage = styled.span`
  background-color: blue;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 4px;
`;

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 45px;
  font-weight: 400;
  line-height: 1.3;
  font-size: 16px;
  color: #414144;
  letter-spacing: -0.03em;
`;

const Price = styled.div`
  line-height: 1;
  font-size: 18px;
  letter-spacing: -0.04em;
  white-space: nowrap;
  word-wrap: normal;
  color: #000;
`;

const image = "./images/phonecase.png";
const videoTitle = "My Title My Title My Title My Title My Title My Title ";
const videoDescription =
  "My Description My Description My Description My Description";
const productTitle = "Product Title and and and Description";
const productPrice = "$99.00";

const handleOnClick = (image, title, price, avatar) => {
  console.log("hello");
};

function FeedProduct() {
  return (
    <>
      <FeedDescription title={videoTitle} description={videoDescription} />
      <ProductWrap
        onClick={handleOnClick(image, productTitle, productPrice)}
      >
        <ThumbnailImage>
          <img src={image} style={{ width: "80px", height: "80px" }} />
        </ThumbnailImage>
        <TextContent>
          <Title>{productTitle}</Title>
          <Price>{productPrice}</Price>
        </TextContent>
      </ProductWrap>
    </>
  );
}

export default FeedProduct;

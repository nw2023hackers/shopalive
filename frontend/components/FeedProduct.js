import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import FeedDescription from "./FeedDescription";
import Checkout from "pages/Checkout";

const slideUp = keyframes`
  from {
    height: 0;
  }
  to {
    height: 200px;
  }
`;

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

const CheckoutWrapper = styled.div`
  animation: ${slideUp} 0.5s ease-in-out;
  height: 0;
  overflow: hidden;
`;

const image = "./images/CaseProduct.png";
const videoTitle = "Plain Phone Case";
const videoDescription =
  "iPhone 11 Pro Max phone case combining a trendy tone with a dazzling cactus green.";
const productTitle = "Product Title and and and Description";
const productPrice = "$49.99";

function FeedProduct() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };

  const handleOnCloseCheckout = () => {
    setIsOpen(false);
  };

  return (
    <>
      <FeedDescription title={videoTitle} description={videoDescription} />
      <ProductWrap onClick={handleOnClick}>
        <ThumbnailImage>
          <img src={image} style={{ width: "80px", height: "80px" }} />
        </ThumbnailImage>
        <TextContent>
          <Title>{productTitle}</Title>
          <Price>{productPrice}</Price>
        </TextContent>
      </ProductWrap>
      <CheckoutWrapper>
        {isOpen && <Checkout onClose={handleOnCloseCheckout} />}
      </CheckoutWrapper>
    </>
  );
}

export default FeedProduct;

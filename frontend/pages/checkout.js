import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { X } from "phosphor-react";

const Wrapper = styled.div`
  position: absolute;
  display: block;
  width: 100vw;
  height: 90vh;
  top: -500px;
  right: 0;
  bottom: 0;
  left: -12px;
  z-index: 100;
`;

const ProductPage = styled.div`
  border: solid 1px black;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;
`;

const ProductTitleWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  background-color: #fff;
  height: 50px;
  padding-top: 6px;
`;

const ProductTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  flex: 1 1 auto;
  line-height: 1.42;
  font-size: 17px;
  font-weight: 600;
  color: #000;
  letter-spacing: -0.02em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-left: 3em;
`;

const Button = styled.button`
  flex: 0 0 auto;
  height: 100%;
  margin-left: auto;
  padding: 0 12px;
  overflow: visible;
  border: 0;
  border-radius: 0;
  background: none;
  color: inherit;
  cursor: pointer;
`;

const ProductImage = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const BottomContainer = styled.div`
  position: relative;
  padding: 17px 18px 15px;
`;

const Price = styled.div`
  position: relative;
  margin-top: 10px;
  padding-right: 111px;
  margin-top: 2px;
  line-height: 25px;
  color: #000;
  display: inline-block;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: -0.8px;
  vertical-align: top;
`;

const ProductDescription = styled.h3`
  font-size: 22px;
  font-weight: normal;
  line-height: 26px;
  word-wrap: break-word;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: block;
`;

const BuyNow = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  bottom: 0;
  width: 80%;
  background: black;
  justify-content: space-around;
  height: 7vh;
  align-items: center;
  color: white;
  margin-bottom: 7vh;
  margin-left: 2.5rem;
  font-size: 24px;
  border-radius: 8px;
`;

const image = "./images/CaseProduct.png";
const productDescription =
  "My Product Description Goes Here. My Product Description Goes Here.";
const productPrice = "$000.00";

function Checkout({onClose}) {

  return (
    <Wrapper>
      <ProductPage>
        <ProductTitleWrap>
          <ProductTitle>Product Title</ProductTitle>
          <Button>
            <X size={32} weight="fill" onClick={onClose}/>
          </Button>
        </ProductTitleWrap>
        <ProductImage>
          <img src={image} style={{ width: "100vw" }} />
        </ProductImage>
        <BottomContainer>
          <ProductDescription>{productDescription}</ProductDescription>
          <Price>{productPrice}</Price>
        </BottomContainer>
        <BuyNow>Buy Now</BuyNow>
      </ProductPage>
    </Wrapper>
  );
}

export default Checkout;

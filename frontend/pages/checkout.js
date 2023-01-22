import React from "react";
import styled from "styled-components";
import { X } from "phosphor-react";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

const ProductPage = styled.div`
  height: calc(100% - 52px);
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
  margin-left: 4em;
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
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

function checkout() {
  return (
    <Wrapper>
      <ProductPage>
        <ProductTitleWrap>
          <ProductTitle>Product Title</ProductTitle>
          <Button>
            <X size={32} weight="fill" />
          </Button>
        </ProductTitleWrap>
      </ProductPage>
    </Wrapper>
  );
}

export default checkout;

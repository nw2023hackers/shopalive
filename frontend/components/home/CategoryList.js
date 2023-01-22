"use client";
import React from "react";
import styled from "styled-components";
import CatBtn from "./CatBtn";

const Category = styled.div`
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function CategoryList() {
  return (
    <>
      <Category>
        <CatBtn icon="/cosmetics.png" text="Beauty" href="" />
        <CatBtn icon="/diet.png" text="Food" href="" />
        <CatBtn icon="/clothes.png" text="Fashion" href="" />
        <CatBtn icon="/travel.png" text="Travel" href="" />
        <CatBtn icon="/blocks.png" text="Kids" href="" />
        <CatBtn icon="/pets.png" text="Pets" href="" />
        <CatBtn icon="/laptop.png" text="Electronics" href="" />
        {/* <CatBtn icon="/workspace.png" text="Office" href="" /> */}
      </Category>
    </>
  );
}

export default CategoryList;

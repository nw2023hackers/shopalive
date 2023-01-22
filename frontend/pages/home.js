"use client";
import Filters from "../components/home/Filters";
import Ad from "../components/home/Ad";
import Live from "../components/home/Live";
import TopTen from "../components/home/TopTen";
import CategoryList from "../components/home/CategoryList";
import styled from "styled-components";

const Content = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // height: 93vh;
`;

export default function Page() {
  return (
    <Content>
      <CategoryList />

      <Filters />

      <Ad />

      <Live />

      <TopTen />
    </Content>
  );
}

import React from "react";
import styled from "styled-components";
import TopTenContainer from "./TopTenContainer";

const Content = styled.div`
  display: flex;
  overflow: auto;
`;

const TopTenDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
`;

function TopTen() {
  return (
    <>
      <h2>Top Ten</h2>
      <Content>
        <TopTenDiv>
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
          <TopTenContainer
            picture="/images/mug.jpg"
            title="Simple Mug"
            desc="This is a mug. This is a mug."
            price="$1.99"
            href=""
          />
        </TopTenDiv>
      </Content>
    </>
  );
}

export default TopTen;

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

const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  margin: 0px 0px 0.2rem 10px;
`;

function TopTen() {
  return (
    <>
      <Title>Top Ten</Title>
      <Content>
        <TopTenDiv>
          <TopTenContainer
            picture="/images/mug.jpg"
            disc="10%"
            price="$1.99"
            title="White Mug"
            desc="Perfect for every drink"
            href=""
          />
          <TopTenContainer
            picture="/images/phonecase.png"
            disc="20%"
            price="$22.99"
            title="iPhone Case"
            desc="Simple iPhone 13 case"
            href=""
          />
          <TopTenContainer
            picture="/images/hoodie.jpeg"
            disc="25%"
            price="$30.99"
            title="Adidas Hoodie"
            desc="Beige Adidas hoodie for the cold"
            href=""
          />
          <TopTenContainer
            picture="/images/scrub.png"
            disc="50%"
            price="$5.99"
            title="Scotch Daddy"
            desc="Scrub daddy for all your scrubbing"
            href=""
          />
          <TopTenContainer
            picture="/images/newb.png"
            disc="30%"
            price="$89.99"
            title="NB 993"
            desc="Sneakers for your feet"
            href=""
          />
          <TopTenContainer
            picture="/images/chair.jpg"
            disc="20%"
            price="$104.99"
            title="Office Chair"
            desc="Comfortable chair for your office"
            href=""
          />
          <TopTenContainer
            picture="/images/sock.jpeg"
            disc="30%"
            price="$11.99"
            title="Nike Socks"
            desc="Nike Crew Socks for your feet"
            href=""
          />
          <TopTenContainer
            picture="/images/pants.png"
            disc="10%"
            price="$125.69"
            title="Lululemon ABC Pants"
            desc="Pants for your legs"
            href=""
          />
          <TopTenContainer
            picture="/images/tshirt.png"
            disc="10%"
            price="$22.50"
            title="Uniqlo T-Shirt"
            desc="T-Shirt for your torso"
            href=""
          />
          <TopTenContainer
            picture="/images/dog.png"
            disc="40%"
            price="$29.99"
            title="Snuggle Puppy"
            desc="Puppy for your crying puppy"
            href=""
          />
        </TopTenDiv>
      </Content>
    </>
  );
}

export default TopTen;

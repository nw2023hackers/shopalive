import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 320px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  margin: 2rem auto;
`;

function Ad() {
  return (
    <ImageContainer>
      <Image src="/images/steve.png" alt="" width={320} height={120} />
    </ImageContainer>
  );
}

export default Ad;

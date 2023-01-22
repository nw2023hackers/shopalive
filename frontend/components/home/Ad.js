import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 500px;
  height: 150px;
  overflow: hidden;
  margin: 0 auto 30px auto;
`;

function Ad() {
  return (
    <ImageContainer>
      <Image src="/images/future.png" alt="" width={415} height={200} />
    </ImageContainer>
  );
}

export default Ad;

import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 300px;
  height: 110px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto 30px auto;
`;

function Ad() {
  return (
    <ImageContainer>
      <Image src="/images/livepeer.jpg" alt="" width={300} height={150} />
    </ImageContainer>
  );
}

export default Ad;

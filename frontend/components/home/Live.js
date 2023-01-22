"use client";
import React from "react";
import styled from "styled-components";
import Video from "../Video";
import LiveVideoContainer from "../LiveVideoContainer";

const VideoList = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-top: 0.5rem;
  // overflow-y: hidden;
  // white-space: nowrap;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  // margin-left: 10px;
  margin: 0px 100px 0.2rem 10px;
`;

function Live() {
  
  return (
    <div>
      <Title>Trending</Title>
      <VideoList>
        <LiveVideoContainer />
      </VideoList>
    </div>
  );
}

export default Live;

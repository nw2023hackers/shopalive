'use client'
import React from "react";
import styled from "styled-components";
import Video from "../Video";
import LiveVideoContainer from "../LiveVideoContainer";

const VideoList = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

function Live() {
  return (
    <div>
      <h2>Trending</h2>
      <VideoList>
        <LiveVideoContainer />
      </VideoList>
    </div>
  );
}

export default Live;

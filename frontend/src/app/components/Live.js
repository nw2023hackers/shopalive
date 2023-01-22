import React from "react";
import styled from "styled-components";
import Video from "../../src/app/components/Video";
import LiveVideoContainer from "../../src/app/components/LiveVideoContainer";

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

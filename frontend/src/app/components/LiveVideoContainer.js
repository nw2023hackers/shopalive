import React from "react";
import styled from "styled-components";
import Video from "./Video";

const VideoContentContainer = styled.div`
  width: 120px;
  height: 200px;
  overflow: clip;
  background-color: grey;
`;

const VideoContentWrapper = styled.div`
  display: flex;
  flex: row;
  width: 130px;
  height: 246px;
  padding-left: 10px;
  white-space: normal;
`;

function LiveVideoContainer() {
  return (
    <>
      <VideoContentWrapper>
        <VideoContentContainer>
          <Video source="/videos/Umbrella.mp4" />
        </VideoContentContainer>
        <div>boob</div>
      </VideoContentWrapper>
      <VideoContentWrapper>
        <VideoContentContainer>
          <Video source="/videos/Wig.mp4" />
        </VideoContentContainer>
      </VideoContentWrapper>
      <VideoContentWrapper>
        <VideoContentContainer>
          <Video source="/videos/PhoneCase.mp4" />
        </VideoContentContainer>
      </VideoContentWrapper>
      <VideoContentWrapper>
        <VideoContentContainer>
          <Video source="/videos/Chocolate.mp4" />
        </VideoContentContainer>
      </VideoContentWrapper>
      <VideoContentWrapper>
        <VideoContentContainer>
          <Video source="/videos/Paint.mp4" />
        </VideoContentContainer>
      </VideoContentWrapper>
      <VideoContentWrapper>
        <VideoContentContainer>
          <Video source="/videos/Candle.mp4" />
        </VideoContentContainer>
      </VideoContentWrapper>
      <VideoContentWrapper>
        <VideoContentContainer>
          <Video source="/videos/Candle2.mp4" />
        </VideoContentContainer>
      </VideoContentWrapper>
    </>
  );
}

export default LiveVideoContainer;

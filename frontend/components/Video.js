import React from "react";
import styled from "styled-components";

const VideoPlayer = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Video(props) {
  return (
    <VideoPlayer playsinline="true" controls loop autoPlay muted>
      <source src={props.source} type="video/mp4" />
    </VideoPlayer>
  );
}

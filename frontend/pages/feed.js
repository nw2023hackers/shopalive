"use client";
import Video from "components/Video";
import { VideoComponent } from "components/LiveVideoContainer";
import styled from "styled-components";

const RightAreaBox = styled.div`
  max-height: calc(100vh - 150px);
  position: absolute;
  z-index: 6;
  bottom: 12px;
  width: 49px;
  right: 12px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Page() {
  //Chat ?
  //Streamer profile
  //Like
  //Share

  const videos = [
    {
      src: "/videos/PhoneCase.mp4",
      description: "my description",
      username: "@cowjuh",
    },
    {
      src: "/videos/Wig.mp4",
      description: "my description",
      username: "@cowjuh",
    },
    {
      src: "/videos/Umbrella.mp4",
      description: "my description",
      username: "@cowjuh",
    },
    {
      src: "/videos/Chocolate.mp4",
      description: "my description",
      username: "@cowjuh",
    },
    {
      src: "/videos/Paint.mp4",
      description: "my description",
      username: "@cowjuh",
    },
    {
      src: "/videos/Candle.mp4",
      description: "my description",
      username: "@cowjuh",
    },
    {
      src: "/videos/Candle2.mp4",
      description: "my description",
      username: "@cowjuh",
    },
  ];

  return (
    <div>
      <RightAreaBox>
        <div>Profile</div>
        <div>Like</div>
        <div>Comment</div>
        <div>Share</div>
      </RightAreaBox>
      <Video source="/videos/PhoneCase.mp4" />
    </div>
  );
}

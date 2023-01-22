"use client";
import Video from "components/Video";
import { VideoComponent } from "components/LiveVideoContainer";
import styled from "styled-components";
import { Heart, ChatCircle, PaperPlaneTilt } from "phosphor-react";
import FeedProduct from "components/FeedProduct";

const RightAreaBox = styled.div`
  max-height: calc(100vh - 150px);
  position: absolute;
  z-index: 6;
  bottom: 11vh;
  width: 49px;
  right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  opacity: 85%;
`;

const Avatar = styled.div`
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  background-size: 100% 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  overflow: visible;
  width: 50px;
  height: 50px;
`;

const LeftAreaBox = styled.div`
  width: 300px;
  height: 200px;
  border: solid 1px black;
  position: absolute;
  z-index: 6;
  bottom: 11vh;
  left: 12px;
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

  const pfp = "'./cuteghost.jpg'";

  return (
    <div>
      <RightAreaBox>
        <Avatar style={{ backgroundImage: `url(${pfp})` }} />
        <Heart size={40} weight="fill" color="white" />
        <ChatCircle size={40} weight="fill" color="white" />
        <PaperPlaneTilt size={40} weight="fill" color="white" />
      </RightAreaBox>
      <LeftAreaBox>
        <FeedProduct avatar={pfp} />
      </LeftAreaBox>
      <Video source="/videos/PhoneCase.mp4" />
    </div>
  );
}

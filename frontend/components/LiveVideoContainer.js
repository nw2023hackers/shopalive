import React, { useState } from "react";
import styled from "styled-components";
import Video from "./Video";
import { useStream, Player } from '@livepeer/react';
import Router from 'next/router'

const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  background-color: grey;
  border-radius: 8px;
  overflow: hidden;
  max-height: 240px;
`;

const VideoContentWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 330px;
  white-space: normal;
  margin-left: 10px;
  vertical-align: top;
  border-radius: 5px;
`;

const StreamTitle = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  max-height: 46px;
  padding: 10px 4px 0 2px;
  line-height: 1.29;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Profile = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  flex: 1 1 auto;
  line-height: 1.2;
  font-size: 12px;
  color: #767678;
  letter-spacing: -0.15px;
  margin-left: 6px;
  padding-top: 6px;
  margin-bottom: 1rem;
`;

export const PLAYBACK_ID = '1590hctucq3f2pmw'
const STREAM_ID = "1590614f-199e-45e5-8ffe-2f4c5b877475"

export const PlayerComponent = ({name, username, onClick}) => {
  return(
    <VideoContentWrapper onClick={onClick}>
          {/* <Player playbackId={PLAYBACK_ID} autoPlay height={"300px"} theme={{
      containerBorderRadius: '8px'
    }}/> */}
    <VideoContentContainer>
    {/* <video 
      preload="auto"
      width="200px"
      height={"300px"} playsinline="true" controls loop autoPlay muted>
      <source src={`https://lp-playback.com/hls/${PLAYBACK_ID}/index.m3u8`} type={"application/vnd.apple.mpegurl"} />
    </video> */}
    {/* <Video source={`https://lp-playback.com/hls/${PLAYBACK_ID}/index.m3u8`} height={"300px"} isPlayer={true}>
    </Video> */}
    <Player playbackId={PLAYBACK_ID} autoPlay controls={{hotkeys: false}} theme={{
      containerBorderRadius: '8px'
    }} aspectRatio="9to16"/>
    </VideoContentContainer>
    <StreamTitle>{name}</StreamTitle>
    <Profile>{username}</Profile>
  </VideoContentWrapper>
  )

}

export const VideoComponent = ({ source, description, username }) => {
  return (
    <VideoContentWrapper>
      <VideoContentContainer>
        <Video source={source} height={"300px"} isPlayer={false}/>
      </VideoContentContainer>
      <StreamTitle>{description}</StreamTitle>
      <Profile>{username}</Profile>
    </VideoContentWrapper>
  );
};

const videos = [
  {
    src: "/videos/PhoneCase.mp4",
    description: "omg new matcha phone case!!",
    username: "@cowjuh",
  },
  {
    src: "/videos/Wig.mp4",
    description: "WIGMAN WIG MAN WIGMAN WIG MAN",
    username: "@wigman",
  },
  {
    src: "/videos/Umbrella.mp4",
    description: "crazy 2 in 1 umbrella pls buy",
    username: "@umbrellaBRO",
  },
  {
    src: "/videos/Chocolate.mp4",
    description: "small business owner selling chocolates!!!",
    username: "@chochoco",
  },
  {
    src: "/videos/Paint.mp4",
    description: "you NEED to try this paint!! (not edible)",
    username: "@paintaholic",
  },
  {
    src: "/videos/Candle.mp4",
    description: "my candle molds >w<",
    username: "@cuwuandle",
  },
  {
    src: "/videos/Candle2.mp4",
    description: "i sell REAL candles and NOT molds!!",
    username: "@andlcity",
  },
];

function LiveVideoContainer() {
  const [live, setLive] = useState(true);
  const { data: stream } = useStream(STREAM_ID);

  const handleClick = () => {
    Router.push("/livestream")
  }

  return (
    <>
      {/* {live && (
        <VideoComponent
          source={"https://lvpr.tv/?v=1590hctucq3f2pmw"}
          description={"FIRST TIME GOING LIVE PLS B NICE!"}
          username={"@spyrux"}
        />
      )} */}
      {stream?.isActive && <PlayerComponent name={stream.name} username={stream.profiles.username} onClick={handleClick}/>}
      
      {videos.map((video) => {
        return (
          <VideoComponent
            source={video.src}
            description={video.description}
            username={video.username}
          />
        );
      })}
    </>
  );
}

export default LiveVideoContainer;
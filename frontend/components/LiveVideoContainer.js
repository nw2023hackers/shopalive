import React from "react";
import styled from "styled-components";
import Video from "./Video";


const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  max-height: 260px;
  background-color: grey;
  border-radius: 8px;
  overflow: hidden;
`;

const VideoContentWrapper = styled.div`
  display: inline-block;
  position: relative;
  max-height: 320px;
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

export const VideoComponent = ({ source, description, username }) => {
  return (
    <VideoContentWrapper>
      <VideoContentContainer>
        <Video source={source} height={"300px"} />
      </VideoContentContainer>
      <StreamTitle>{description}</StreamTitle>
      <Profile>{username}</Profile>
    </VideoContentWrapper>
  );
};

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



function LiveVideoContainer() {
  return (
    <>
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

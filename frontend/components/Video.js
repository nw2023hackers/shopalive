import React from "react";
import styled from "styled-components";


export default function Video({height, source, isPlayer}) {
  
  return (
    <video 
      preload="auto"
      height={height} playsinline="true" controls loop autoPlay muted>
      <source src={source} type={isPlayer? "application/x-mpegURL" : "video/mp4"} />
    </video>
  );
}

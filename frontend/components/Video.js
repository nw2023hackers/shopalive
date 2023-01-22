import React from "react";
import styled from "styled-components";


export default function Video(props) {
  
  return (
    <video height={props.height} playsinline="true" controls loop autoPlay muted>
      <source src={props.source} type="video/mp4" />
    </video>
  );
}

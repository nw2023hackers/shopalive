import React from "react";
import styled from "styled-components";

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 240px;
  max-height: 56px;
  line-height: 1.34;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.54px;
  margin-block-start: 0.63em;
`;

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  white-space: nowrap;
  word-wrap: normal;
  width: 100%;
  line-height: 1.54;
  font-size: 15px;
  color: #fff;
  letter-spacing: -0.13px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

function FeedDescription(props) {
  return (
    <>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </>
  );
}

export default FeedDescription;

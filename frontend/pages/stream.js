'use client'
import { useState, useEffect } from 'react';

import * as React from 'react';


import Stream from './../components/video/stream'

import Upload from './upload';
import styled from 'styled-components';

const pageTitle = styled.div`
  display: flex;
  align-items: center;
`


const uploadContainer = styled.div`
   border: 10px solid black;

`

const streamContainer = styled.div`
border: 1px solid black;`




function Streamer() {
  const [keyValue, setKeyValue] = useState("N/A");
  const [serverValue, setServerValue] = useState("N/A");
  const handleStreamData = (stream) => {

    console.log(stream.playbackId);//publish tgus
    console.log(stream.streamKey);
    console.log("rtmp.livepeer.com/live");//display these to the creator
    console.log(stream);

    setKeyValue(stream.streamKey);
    setServerValue(stream.rtmpIngestUrl.replace(stream.streamKey, ""));
    // livepeer uses the rtmp ingest protocol which allows it to have 
    //minimal buffering and low latency streaming



  }

  
  return (
    <div>
      <h2 idName={pageTitle}>STREAMER DASHBOARD</h2>
      <div className={uploadContainer}>
      <Upload />
      </div>
      <streamContainer>
        <div><p>Key: {keyValue}</p>
          <p>Server : {serverValue}</p></div>

        <Stream onStreamData={handleStreamData} />
      </streamContainer>

    </div>
  );
};

export default Streamer

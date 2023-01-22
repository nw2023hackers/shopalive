'use client'
import { useState, useEffect } from 'react';

import * as React from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider, Player
} from '@livepeer/react';

import Stream from './../components/video/stream'









export default function Streamer(){
  const [keyValue, setKeyValue] = useState("N/A");
  const [serverValue,setServerValue] = useState("N/A");
  const handleStreamData = (stream) =>{
  
    console.log(stream.playbackId);//publish tgus
    console.log(stream.streamKey);
    console.log("rtmp.livepeer.com/live");//display these to the creator
    console.log(stream);
    
    setKeyValue(stream.streamKey);
    setServerValue(stream.rtmpIngestUrl.replace(stream.streamKey,""));
    // livepeer uses the rtmp ingest protocol which allows it to have 
    //minimal buffering and low latency streaming
    

     
}
  return (
    <div>
      
        <div><p>Key: {keyValue}</p>
        <p>Server: {serverValue}</p></div>
      
    <Stream onStreamData={handleStreamData} />
    </div>
  );
};


'use client'


import * as React from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider, Player
} from '@livepeer/react';

import Stream from './../components/video/stream'

const handleStreamData = (stream) =>{
    console.log(stream.playbackId)
    console.log(stream.streamKey);
    console.log(stream);
    console.log("rtmp.livepeer.com/live");
    // livepeer uses the rtmp ingest protocol which allows it to have 
    //minimal buffering and low latency streaming
    

    // return (

    // );
}
 
 
export default function Streamer(){
  return (
    
    <Stream onStreamData={handleStreamData} />
    
  );
};


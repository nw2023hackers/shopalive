'use client'


import * as React from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider, Player
} from '@livepeer/react';

import Stream from './stream';

const playbackId =
  '6d7el73r1y12chxr';


 
const client = createReactClient({
  provider: studioProvider({ apiKey: '0e8919d3-107b-4f9d-9f19-81b81e1b7b5b' }),
});

const handleStreamData = (stream) =>{
    console.log(stream.playbackId)
    console.log(stream.streamKey);
}
 


 
const PosterImage = () => {
  return (
    <img
      src="https://docs.livepeer.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblender-poster.6bbe6a8a.png&w=1920&q=75"
      
    />
  );
};
 
export default function Streamer(){
  return (
    <LivepeerConfig client={client}>
       <Stream onStreamData={handleStreamData} />
    </LivepeerConfig>
  );
};


'use client'


import * as React from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider, Player
} from '@livepeer/react';

const playbackId =
  '6d7el73r1y12chxr';


 
const client = createReactClient({
  provider: studioProvider({ apiKey: '13b8c6ef-4789-4b6a-b930-b05409be32ff' }),
});
 


 
const PosterImage = () => {
  return (
    <img
      src="https://docs.livepeer.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblender-poster.6bbe6a8a.png&w=1920&q=75"
      
    />
  );
};
 
const DemoPlayer = () => {
  return (
    <LivepeerConfig client={client}>
    <div>
    <Player
      title="Waterfalls"
      playbackId={playbackId}
      showPipButton
      showTitle={false}
      aspectRatio="16to9"
      poster={<PosterImage />}
      controls={{
        autohide: 3000,
      }}
      theme={{
        borderStyles: { containerBorderStyle: 'hidden' },
        radii: { containerBorderRadius: '10px' },
      }}
     
    /> </div></LivepeerConfig>
  );
};
export default DemoPlayer;
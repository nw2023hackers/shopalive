'use client'


import * as React from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider, Player
} from '@livepeer/react';




 
const client = createReactClient({
  provider: studioProvider({ apiKey: '13b8c6ef-4789-4b6a-b930-b05409be32ff' }),
});
 

const PosterImage = () => {
    return (
      <img
        src='frontend/public/48357144_270569060299360_7846457525221195776_n.jpg'
        
      />
    );
  };
 
const Watch = (playbackId) => {
  return (
    
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
     
    /> </div>
  );
};
export default Watch;

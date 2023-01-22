'use client'


import * as React from 'react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider, Player
} from '@livepeer/react';

const playbackId =
  '6d7el73r1y12chxr';


 
<<<<<<< HEAD:frontend/src/app/player/page.js
const client = createReactClient({
  provider: studioProvider({ apiKey: '0e8919d3-107b-4f9d-9f19-81b81e1b7b5b' }),
});
=======
>>>>>>> 8693d30cc63d8b1436fb7072fd7fa75304f33c26:frontend/pages/player.js
 


 
const PosterImage = () => {
  return (
    <img
      src="https://docs.livepeer.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblender-poster.6bbe6a8a.png&w=1920&q=75"
      
    />
  );
};
 
const DemoPlayer = () => {
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
export default DemoPlayer;

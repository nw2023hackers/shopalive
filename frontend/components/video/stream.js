'use client'
<<<<<<< HEAD:frontend/src/app/stream/stream.js
import * as React from 'react';
=======


import * as React from 'react';
<<<<<<<< HEAD:frontend/src/app/stream/page.js
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
 


========
>>>>>>> 8693d30cc63d8b1436fb7072fd7fa75304f33c26:frontend/components/video/stream.js
import { useState, useMemo, useEffect } from 'react';

import {   Player, useCreateStream } from '@livepeer/react';

 


<<<<<<< HEAD:frontend/src/app/stream/stream.js

=======
const handleStreamData = (stream) =>{
  console.log(stream.playbackId);
  console.log(stream.streamKey);
  console.log(stream)
  //display stream data to broadcaster
}
>>>>>>> 8693d30cc63d8b1436fb7072fd7fa75304f33c26:frontend/components/video/stream.js
//use streamKey to get key to put to obs
// rtmpIngestUrl to get url to stream to 
// playbackId to watch from

// when we get streamed data back we want to pass the streamkey back to post
export const Stream = ({onStreamData}) => {
  const [streamName, setStreamName] = useState('');
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null);

  useEffect(() => {
    if (stream) {
      onStreamData(stream);
    }
  }, [stream, onStreamData]);
<<<<<<< HEAD:frontend/src/app/stream/stream.js
 
  const isLoading = useMemo(() => status === 'loading', [status]);
 
  return (
=======
>>>>>>>> 8693d30cc63d8b1436fb7072fd7fa75304f33c26:frontend/components/video/stream.js
 
const PosterImage = () => {
  return (
    <img
      src="https://docs.livepeer.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblender-poster.6bbe6a8a.png&w=1920&q=75"
      
    />
  );
};
 
export default function Streamer(){
  return (
<<<<<<<< HEAD:frontend/src/app/stream/page.js
    <LivepeerConfig client={client}>
       <Stream onStreamData={handleStreamData} />
    </LivepeerConfig>
========
>>>>>>> 8693d30cc63d8b1436fb7072fd7fa75304f33c26:frontend/components/video/stream.js
    <div>
      <input
        type="text"
        placeholder="Stream name"
        onChange={(e) => setStreamName(e.target.value)}
      />
 
      {stream?.playbackId && (
        <Player
          title={stream?.name}
          playbackId={stream?.playbackId}
          autoPlay
          muted
        />
      )}
 
      <div>
        {!stream && (
          <button
            onClick={() => {
              createStream?.();
            }}
            disabled={isLoading || !createStream}
          >
            Create Stream
          </button>
        )}
      </div>
    </div>
<<<<<<< HEAD:frontend/src/app/stream/stream.js
  );
};
export default Stream;
=======
>>>>>>>> 8693d30cc63d8b1436fb7072fd7fa75304f33c26:frontend/components/video/stream.js
  );
};

>>>>>>> 8693d30cc63d8b1436fb7072fd7fa75304f33c26:frontend/components/video/stream.js

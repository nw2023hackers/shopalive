'use client'
import * as React from 'react';
import { useState } from 'react';
import {   LivepeerConfig,
    createReactClient,
    studioProvider, Player, useCreateStream } from '@livepeer/react';
 



//use streamKey to get key to put to obs
// rtmpIngestUrl to get url to stream to 
// playbackId to watch from

const client = createReactClient({
    provider: studioProvider({ apiKey: '13b8c6ef-4789-4b6a-b930-b05409be32ff' }),
  });
 
  
const Stream = () => {
  const [streamName, setStreamName] = useState('');
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null);
 
  const isLoading = useMemo(() => status === 'loading', [status]);
 
  return (
    <LivepeerConfig client={client}>
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
    </LivepeerConfig>
  );
};
export default Stream;
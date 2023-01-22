'use client'
import * as React from 'react';
import { useState, useMemo, useEffect } from 'react';
import { Player, useCreateStream } from '@livepeer/react';


const handleStreamData = (stream) =>{
  console.log(stream.playbackId);
  console.log(stream.streamKey);
  console.log(stream)
  //display stream data to broadcaster
}
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
 
  const isLoading = useMemo(() => status === 'loading', [status]);
 
  return (
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
  );
};
export default Stream;
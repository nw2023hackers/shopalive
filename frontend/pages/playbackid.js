import { usePlaybackInfo } from '@livepeer/react';

async function getPlaybackInfo(playbackId) {
  const { data: playbackInfo } = await usePlaybackInfo(playbackId);
  return playbackInfo;
}

// getPlaybackInfo('8a1e67i45y5sglj8');
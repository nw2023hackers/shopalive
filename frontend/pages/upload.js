import { useState } from "react";
import { useCreateAsset } from "@livepeer/react";
import { Player } from "@livepeer/react";

export default function Upload() {
    const [video, setVideo] = useState();
    const {
      mutate: createAsset,
      data: assets,
      status,
      progress,
      error,
    } = useCreateAsset(
      // we use a `const` assertion here to provide better Typescript types
      // for the returned data
      video
        ? {
            sources: [{ name: video.name, file: video }],
          }
        : null,
    );
   
    return (
      <div>
        <input
          type="file"
          multiple={false}
          accept="video/*"
          onChange={(e) => {
            if (e.target.files) {
              setVideo(e.target.files[0]);
            }
          }}
        />
        <button
          disabled={status === 'loading' || !createAsset}
          onClick={() => {
            createAsset?.();
          }}
        >
          Create Asset
        </button>
        {assets?.map((asset) => (
          <div key={asset.id}>
            <div>
              <div>Asset Name: {asset?.name}</div>
              <div>Playback URL: {asset?.playbackUrl}</div>
              <div>IPFS CID: {asset?.storage?.ipfs?.cid ?? 'None'}</div>
            </div>
            {asset?.playbackId && (
        <Player title={asset.name} playbackId={asset.playbackId}controls={{
            autohide: 3000,
          }}aspectRatio="16to9"

          theme={{
            borderStyles: { containerBorderStyle: 'hidden' },
            radii: { containerBorderRadius: '10px' },
          }} />
      )}
          </div>
        ))}
   
        {error && <div>{error.message}</div>}
      </div>
    );
  }
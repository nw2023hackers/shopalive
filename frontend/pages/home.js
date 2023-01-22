'use client';
import Filters from '../components/home/Filters';
import Ad from '../components/home/Ad';
import Live from '../components/home/Live';
import TopTen from '../components/home/TopTen';
import CategoryList from '../components/home/CategoryList';
import { usePlaybackInfo } from '@livepeer/react';

// https://lvpr.tv/?v=1590hctucq3f2pmw
export const PLAYBACK_ID = '1590hctucq3f2pmw'
export default function Page() {
	const { data: playbackInfo } = usePlaybackInfo(PLAYBACK_ID);
	console.log(playbackInfo)
	return (
		<div>
			{/* {playbackInfo?.meta.live && <Player playbackId={PLAYBACK_ID} autoPlay/>} */}
			<CategoryList />
			<Ad />
			{/* <Filters /> */}
			<Live />
			<TopTen />
			
		</div>
	);
}

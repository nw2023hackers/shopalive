'use client';
import Filters from '../components/home/Filters';
import Ad from '../components/home/Ad';
import Live from '../components/home/Live';
import TopTen from '../components/home/TopTen';
import CategoryList from '../components/home/CategoryList';
import { usePlaybackInfo } from '@livepeer/react';

const PLAYBACK_ID = '8a1e67i45y5sglj8'
export default function Page() {
	const { data: playbackInfo } = usePlaybackInfo(PLAYBACK_ID);
	console.log(playbackInfo)
	return (
		<div>
			<CategoryList />
			<Filters />
			<Ad />
			<Live />
			<TopTen />
			
		</div>
	);
}

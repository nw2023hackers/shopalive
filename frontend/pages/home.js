'use client';
import Filters from '../components/home/Filters';
import Ad from '../components/home/Ad';
import Live from '../components/home/Live';
import TopTen from '../components/home/TopTen';
import CategoryList from '../components/home/CategoryList';

export default function Page() {
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

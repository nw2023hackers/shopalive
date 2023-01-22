'use client';
import Filters from '../components/home/Filters';
import Ad from '../components/home/Ad';
import Live from '../components/home/Live';
import TopTen from '../components/home/TopTen';
import CategoryList from '../components/home/CategoryList';

export default function Page() {

	// const ws = new WebSocket("wss://ws.bitstamp.net");

	// const apiCall = {
	//   event: "bts:subscribe",
	//   data: { channel: "order_book_btcusd" },
	// };
  
	// ws.onopen = (event) => {
	//   ws.send(JSON.stringify(apiCall));
	// };
  
	// ws.onmessage = function (event) {
	//   const json = JSON.parse(event.data);
	//   try {
	// 	if ((json.event = "data")) {
	// 	  setBids(json.data.bids.slice(0, 5));
	// 	}
	//   } catch (err) {
	// 	console.log(err);
	//   }
	// };
	return (
		<div>
			<CategoryList />
			<Ad />
			{/* <Filters /> */}
			<Live />
			<TopTen />
		</div>
	);
}

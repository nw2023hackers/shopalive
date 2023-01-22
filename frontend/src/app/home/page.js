"use client";
import Catagory from "../components/home/Catagory";
import Filters from "../components/home/Filters";
import Ad from "../components/home/Ad";
import Live from "../components/home/Live";
import TopTen from "../components/home/TopTen";
import Video from "../components/Video";

export default function Page() {
  return (
    <div>
      <Catagory />
      <Filters />
      <Ad />
      <Live />
      <TopTen />
      {/* <Video /> */}
    </div>
  );
}

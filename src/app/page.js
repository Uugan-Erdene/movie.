"use client";
import Image from "next/image";
import "./style.css";
import { Navbar } from "./_compponent/navbar";
import { WatchMovie } from "./_compponent/watchMovie";
import { Sum } from "./_compponent/icons/sum";
import { UpComing } from "./_compponent/_features/upcoming";
import { Coming } from "./_compponent/_features/coming";
import { Popular } from "./_compponent/_features/popular";
import { TopRated } from "./_compponent/_features/toprated";
import { MailAppPhone } from "./_compponent/_features/mailApp";

export default function Home() {
  return (
    <div className="w-360 m-auto  ">
      <Navbar />
      <WatchMovie />
      <Coming />
      <Popular />
      <TopRated />
      <MailAppPhone />
    </div>
  );
}

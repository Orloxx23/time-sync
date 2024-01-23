"use client";

import { useEffect, useState } from "react";
import Background from "@/components/Background";
import DiscordTime from "@/components/sections/DiscordTime";
import Timezones from "@/components/sections/Timezones";
import Footer from "../components/Footer";

export default function Home() {
  const [time, setTime] = useState(new Date());

  return (
    <main className="w-full min-h-screen flex flex-col gap-8 justify-center items-center relative">
      <Background />
      <Timezones time={time} setTime={setTime} />
      <DiscordTime time={time} />
      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import Background from "@/components/Background";
import DiscordTime from "@/components/sections/DiscordTime";
import Timezones from "@/components/sections/Timezones";

export default function Home() {
  const [time, setTime] = useState(new Date());
  return (
    <main className="w-full h-screen flex flex-col gap-8 justify-center items-center relative">
      <Background />
      <Timezones time={time} setTime={setTime} />
      <DiscordTime time={time} />
    </main>
  );
}

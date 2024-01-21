import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Github, FolderGit2, MapPin } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Footer() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("/api/ghUser")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
      });
  }, []);

  return (
    <footer className="container max-w-2xl flex justify-between xl:fixed bottom-0 py-2 items-center">
      <p className="text-xs">
        <HoverCard>
          <HoverCardTrigger className="underline cursor-pointer opacity-65">
            <a
              href="https://orlandomm.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Orloxx23
            </a>
          </HoverCardTrigger>
          {userData && (
            <HoverCardContent className="w-fit">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage src={userData?.avatar_url} />
                  <AvatarFallback>O</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-bold">{userData?.name}</p>
                  <p className="text-xs opacity-65">@{userData?.login}</p>
                  <div className="flex gap-4 mt-2">
                    {/* <div className="flex items-center gap-1 text-xs opacity-65">
                      <span>Followers</span>
                      <span>{userData?.followers}</span>
                    </div> */}
                    <div className="flex items-center gap-1 text-xs opacity-65">
                      <FolderGit2 className="size-4" />
                      <span>{userData?.public_repos}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs opacity-65">
                      <MapPin className="size-4" />
                      <span>{userData?.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          )}
        </HoverCard>
      </p>
      <Button asChlid variant="outline" size="icon" className="opacity-65">
        <Link
          href="https://github.com/Orloxx23/time-sync"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </Link>
      </Button>
    </footer>
  );
}

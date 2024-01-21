import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { HelpCircle } from "lucide-react";

export default function Help({ text }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-default group">
          <Button variant="outline" size="icon" className="cursor-help">
            <HelpCircle className="opacity-70 group-hover:opacity-100 transition duration-300" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

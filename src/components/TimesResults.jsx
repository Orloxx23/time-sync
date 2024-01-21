import React from "react";
import { Textarea } from "./ui/textarea";
import localFont from "next/font/local";
import CopyButton from "./CopyButton";

const emojis = localFont({
  src: "../fonts/TwitterColorEmoji.ttf",
});

export default function TimesResults({ result, setResult }) {
  return (
    <div className="relative">
      <Textarea
        placeholder="Tu resultado saldrá aqui"
        id="result"
        className={`resize-none ${emojis.className} text-2xl`}
        rows={6}
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
      {result && (
        <div className="absolute top-2 right-2">
          <CopyButton toCopy={result} />
        </div>
      )}
    </div>
  );
}

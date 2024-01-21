import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import FormatSelect from "../FormatSelect";
import Help from "../Help";
import TimesResults from "../TimesResults";
import { FORMAT12 } from "@/lib/constants";
import { fillTextArea } from "@/lib/utils";

export default function Timezones({ time, setTime }) {
  // const [time, setTime] = useState("");
  const [result, setResult] = useState("");
  const [format, setFormat] = useState(FORMAT12);

  useEffect(() => {
    fillTextArea(time, format, setResult);
  }, [time, format]);

  return (
    <div className="container max-w-2xl flex flex-col gap-4">
      <div className="flex gap-4">
        <Input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <FormatSelect format={format} setFormat={setFormat} />
        <Help
          text={
            "Al pegar el texto las banderas se veran de forma correcta."
          }
        />
      </div>
      <TimesResults result={result} setResult={setResult} />
    </div>
  );
}

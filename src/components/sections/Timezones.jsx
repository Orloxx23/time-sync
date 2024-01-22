import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import FormatSelect from "../FormatSelect";
import Help from "../Help";
import TimesResults from "../TimesResults";
import { FORMAT12 } from "@/lib/constants";
import { fillTextArea } from "@/lib/utils";

export default function Timezones({ time, setTime }) {
  const [result, setResult] = useState("");
  const [format, setFormat] = useState(FORMAT12);

  const changeFormat = (f) => {
    setFormat(f);
    localStorage.setItem("format", f);
  };

  useEffect(() => {
    fillTextArea(time, format, setResult);
  }, [time, format]);

  useEffect(() => {
    const _format = localStorage.getItem("format");
    if (_format) setFormat(_format);
  }, []);

  return (
    <div className="container max-w-2xl flex flex-col gap-4 mt-8 xl:mt-0">
      <div className="flex gap-4">
        <Input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <FormatSelect format={format} setFormat={changeFormat} />
        <Help
          text={"Al pegar el texto las banderas se veran de forma correcta."}
        />
      </div>
      <TimesResults result={result} setResult={setResult} />
    </div>
  );
}

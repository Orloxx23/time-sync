import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import CopyButton from "../CopyButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import moment from "moment";
import { SPANISHTIME } from "@/lib/constants";
import Help from "../Help";

moment.locale("es", SPANISHTIME);

export default function DiscordTime({ time }) {
  const [result, setResult] = useState("");
  const [preview, setPreview] = useState("");
  const [type, setType] = useState("stime");

  useEffect(() => {
    const miliseconds = Date.parse(time);
    switch (type) {
      case "stime":
        setResult(`<t:${miliseconds / 1000}:t>`);
        break;
      case "ltime":
        setResult(`<t:${miliseconds / 1000}:T>`);
        break;
      case "sdate":
        setResult(`<t:${miliseconds / 1000}:d>`);
        break;
      case "ldate":
        setResult(`<t:${miliseconds / 1000}:D>`);
        break;
      case "ldatestime":
        setResult(`<t:${miliseconds / 1000}:f>`);
        break;
      case "ldatedaystime":
        setResult(`<t:${miliseconds / 1000}:F>`);
        break;
      case "relative":
        setResult(`<t:${miliseconds / 1000}:R>`);
        break;
      default:
        break;
    }
  }, [time, type]);

  useEffect(() => {
    switch (type) {
      case "stime":
        setPreview(moment(time).format("LT"));
        break;
      case "ltime":
        setPreview(moment(time).format("LTS"));
        break;
      case "sdate":
        setPreview(moment(time).format("L"));
        break;
      case "ldate":
        setPreview(moment(time).format("LL"));
        break;
      case "ldatestime":
        setPreview(moment(time).format("LLL"));
        break;
      case "ldatedaystime":
        setPreview(moment(time).format("LLLL"));
        break;
      case "relative":
        setPreview(moment(time).fromNow());
        break;
      default:
        break;
    }
  }, [time, type]);

  return (
    <div className="container max-w-2xl flex flex-col gap-4">
      <Card className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img src="/discord.svg" alt="" className="size-8" />
          <p className="font-bold">Discord Timestamp</p>
          <div className="flex-1" />
          <Help text="Que el resultado sea de 12 o 24 horas depende de la configuración del idioma de Discord." />
        </div>
        <p className="text-sm opacity-70">
          Consigue una visualización dinámica de la fecha y la hora en tus
          mensajes de Discord. Elige la hora y copia el código que aparece a
          continuación.
        </p>
        <Separator />
        <div className="flex gap-4">
          <div className="w-full relative">
            <Input type="text" readOnly value={result} />
            <div className="absolute top-0 right-0">
              <CopyButton toCopy={result} variant="ghost" />
            </div>
          </div>
          <Select onValueChange={(value) => setType(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stime">Tiempo corto</SelectItem>
              <SelectItem value="ltime">Tiempo largo</SelectItem>
              <SelectItem value="sdate">Fecha corta</SelectItem>
              <SelectItem value="ldate">Fecha larga</SelectItem>
              <SelectItem value="ldatestime">
                Fecha larga con tiempo corto
              </SelectItem>
              <SelectItem value="ldatedaystime">
                Fecha larga con dia de la semana y tiempo corto
              </SelectItem>
              <SelectItem value="relative">Relativo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <p className="opacity-50 text-xs font-bold">Resultado:</p>
          {time && <pre className="opacity-50 text-xs">{preview}</pre>}
        </div>
      </Card>
    </div>
  );
}

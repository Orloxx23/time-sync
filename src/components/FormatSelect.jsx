import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { FORMAT12, FORMAT24 } from "@/lib/constants";

export default function FormatSelect({ format, setFormat }) {
  return (
    <Select value={format} onValueChange={(value) => setFormat(value)}>
      <SelectTrigger className="aspect-square w-24">
        <SelectValue placeholder={format} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem selected={format == FORMAT12} value={FORMAT12}>12H</SelectItem>
        <SelectItem selected={format == FORMAT24}  value={FORMAT24}>24H</SelectItem>
      </SelectContent>
    </Select>
  );
}

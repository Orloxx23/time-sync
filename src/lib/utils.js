import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import countries from "@/data/countries.json";
import { FORMAT12 } from "./constants";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function changeTimeZone(date, timeZone) {
  const dateToUse = typeof date === "string" ? new Date(date) : date;

  return new Date(
    dateToUse.toLocaleString("en-US", {
      timeZone,
    })
  );
}

export const transformDateToString = (date, format) => {
  const hour12 = format == FORMAT12 ? true : false;

  const localDate = date.toLocaleString("es-ES", {
    hour12: hour12,
    hour: "numeric",
    minute: "numeric",
  });

  const resultDate = format == FORMAT12 ? localDate.replace(/^0:/, "12:") : localDate.replace(":00", "H");

  return resultDate;
};

export const fillTextArea = (time, format, setResult) => {
  const mainDate = new Date(time);
  const times = {};

  countries.forEach((country) => {
    const { country_code: code, emoji, timezones } = country;
    const [timezone] = timezones;

    const dateInTimezone = changeTimeZone(mainDate, timezone);
    const hour = dateInTimezone.getHours();

    times[hour] ??= [];

    times[hour].push({
      date: dateInTimezone,
      code,
      emoji,
      timezones,
    });

    const sortedTimesEntries = Object.entries(times).sort(
      ([timeA], [timeB]) => timeB + -timeA
    );

    const html = sortedTimesEntries
      .map(([, countries]) => {
        const flags = countries
          .map((country) => `${country.emoji}`)
          .join(" ");
        const [country] = countries;
        const { date } = country;

        return `${transformDateToString(date, format)} ${flags}`;
      })
      .join("\n");

    if (time) setResult(html);
  });
};
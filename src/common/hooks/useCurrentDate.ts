import { useEffect, useState } from "react";

interface CurrentDate {
  date: string;
  day: string;
  weekday: string;
  weekdayShort: string;
  full: string;
}

export const useCurrentDate = (): CurrentDate => {
  const [current, setCurrent] = useState<CurrentDate>(() => {
    const now = new Date();
    return formatDate(now);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(formatDate(new Date()));
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  return current;
};

const formatDate = (date: Date): CurrentDate => {
  const longFormatter = new Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const shortWeekdayFormatter = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
  });

  const parts = longFormatter.formatToParts(date);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const day = parts.find((p) => p.type === "day")?.value ?? "";
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const year = parts.find((p) => p.type === "year")?.value ?? "";

  const weekdayShort = shortWeekdayFormatter.format(date);

  return {
    weekday,
    weekdayShort,
    day,
    date: `${day} ${month}`,
    full: `${weekday}, ${day} ${month} ${year}`,
  };
};

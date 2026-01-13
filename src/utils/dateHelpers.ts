import dayjs, { Dayjs } from "dayjs";

export function getLastNDays(date: string | Dayjs, n: number): string[] {
  const day = typeof date === "string" ? dayjs(date) : date;

  return Array.from({ length: n }, (_, i) =>
    day.subtract(i, "day").format("YYYY-MM-DD")
  );
}

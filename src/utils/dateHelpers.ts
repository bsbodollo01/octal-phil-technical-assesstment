import dayjs from "dayjs";

export const getLastNDays = (date: dayjs.Dayjs, n = 7): string[] => {
  return Array.from({ length: n }, (_, i) =>
    date.subtract(i, "day").format("YYYY-MM-DD")
  ).reverse();
};

import dayjs from "dayjs";

export function previousMonth(monthValue, year) {
  const firstOfMonthDay = dayjs(`${year}-${monthValue}-01`).day();
  const weekStartsOn = 1;

  if (firstOfMonthDay === 0) {
    return [];
  }
  const previousMonthDayShown = firstOfMonthDay - weekStartsOn;

  const perviousMonth = Array.apply(null, Array(previousMonthDayShown)).map(
    (x, y) => null
  );

  return perviousMonth;
}

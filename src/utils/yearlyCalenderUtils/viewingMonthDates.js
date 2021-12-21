import dayjs from "dayjs";

export function viewingMonthDates(theFirstOfTheMonth) {
  return dayjs(theFirstOfTheMonth).daysInMonth();
}

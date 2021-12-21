import dayjs from "dayjs";

import {
  previousMonth,
  viewingMonthDates,
  weeksInMonth
} from "./yearlyCalenderUtils";

function getMonthsInAYear(noMonth = 12) {
  return Array.apply(null, Array(noMonth)).map((x, y) => y + 1);
}

function monthDates(numOfdays, Mth, Yr) {
  const lastMonthShownCurrentMonth = previousMonth(Mth, Yr);
  // need to return an object that has dates and wkNumber {wk:45,dates:[1,2,3,4,5,6,7]}
  const days = Array.apply(null, Array(numOfdays)).map((x, y) => y + 1);
  return [...lastMonthShownCurrentMonth, ...days];
}

function currentMonthConstruct(monthValue, yearViewed) {
  const _FirstOfTheViewMonth = dayjs(`${yearViewed}-${monthValue}-1`);

  const daysInAMonth = viewingMonthDates(_FirstOfTheViewMonth);
  const daysInView = monthDates(daysInAMonth, monthValue, yearViewed);
  const weekForTheMonth = weeksInMonth(daysInView, _FirstOfTheViewMonth);

  const monthlyViewData = {
    weekForTheMonth,
    monthName: dayjs(_FirstOfTheViewMonth).format("MMMM"),
    viewDates: daysInView
  };

  return monthlyViewData;
}

export { currentMonthConstruct, monthDates, getMonthsInAYear };

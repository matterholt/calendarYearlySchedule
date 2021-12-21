import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

import array from "lodash/array";

dayjs.extend(weekOfYear);

export function weeksInMonth(monthDates, firstOfMonth) {
  // const { viewedDate, viewedYear, monthFull } = monthDates;
  let __INITAL_FIRST_WEEK = firstOfMonth.week();

  const cycle = monthDates.map((oneDayInMonth) => {
    if (!oneDayInMonth) {
      return __INITAL_FIRST_WEEK;
    }
    const dateView = dayjs(firstOfMonth).date(oneDayInMonth).week();

    return dateView;
  });
  const sorted = array.sortedUniq(cycle);

  return sorted;
}

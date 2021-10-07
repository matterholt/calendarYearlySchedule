import dayjs from "dayjs";

var weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

// Calculate the number of days
// used to create an array for the calender
function getNumberOfDaysInMonth(year, month) {
  return dayjs(`${year}-${month}-01`).daysInMonth();
}

// check if date is on a weekday
function getWeekday(date) {
  return dayjs(date).weekday();
}

function createDaysForCurrentMonth(year, month) {
  return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
    return {
      date: dayjs(`${year}-${month}-${index + 1}`)
        .add(1, "month")
        .format("YYYY-MM-DD"),
      dayOfMonth: index + 1,
      isCurrentMonth: true,
      taskTodo: []
    };
  });
}

function DaysViewedForPreviousMonth(year, month, currentMonthDaysdate) {
  const firstDayOfTheMonthWeekday = getWeekday(currentMonthDaysdate);
  const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");

  const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
    ? firstDayOfTheMonthWeekday - 1
    : 6;

  const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDaysdate)
    .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
    .date();

  return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
    return {
      date: dayjs(
        `${previousMonth.year()}-${previousMonth.month() + 1}-${
          previousMonthLastMondayDayOfMonth + index
        }`
      ).format("YYYY-MM-DD"),
      dayOfMonth: previousMonthLastMondayDayOfMonth + index,
      isCurrentMonth: false
    };
  });
}

function DaysViewedForNextMonth(year, month, currentMonthDaysLength) {
  const lastDayOfTheMonthWeekday = getWeekday(
    `${year}-${month}-${currentMonthDaysLength}`
  );
  const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");
  const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
    ? 7 - lastDayOfTheMonthWeekday
    : lastDayOfTheMonthWeekday;
  return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
    return {
      date: dayjs(
        `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
      ).format("YYYY-MM-DD"),
      dayOfMonth: index + 1,
      isCurrentMonth: false
    };
  });
}

function CompleteCalenderView(year, month) {
  const currentMonthDays = createDaysForCurrentMonth(year, month);

  const currentMonthDaysdate = currentMonthDays[0].date;
  const currentMonthDaysLength = currentMonthDays.length;

  const previousMonthDays = DaysViewedForPreviousMonth(
    year,
    month,
    currentMonthDaysdate
  );
  const nextMonthDays = DaysViewedForNextMonth(
    year,
    month,
    currentMonthDaysLength
  );

  return [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
}

export { CompleteCalenderView };

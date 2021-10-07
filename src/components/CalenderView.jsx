import { useEffect, useState, useReducer } from "react";
import { CompleteCalenderView } from "../utils/displayedMonth";
import { eventForViewMonth } from "../utils/eventsForViewMonth";
import holidayData from "../utils/HolidayDates";
import { CalenderHeader, WeekTitles, CalenderWeek } from "./monthyCalander/";
import dayjs from "dayjs";

const TempEvent = {
  id: 777,
  eventName: "New Years Day",
  date: "2021-11-15",
  isActive: true
};

const WEEKDAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thurday",
  "friday",
  "saturday",
  "sunday"
];

function MonthViewReducer(state, action) {
  switch (action.type) {
    case "nextMonth":
      return dayjs(state).add(1, "month").format("MM");
    case "previousMonth":
      return dayjs(state).subtract(1, "month").format("MM");
    default:
      return state;
  }
}
// TODO UPDATE CODE FROM GITHUB

// filter and reduce the week numbers
// update code to
export function CalenderView() {
  const [currentDate, setCurrentDate] = useState(() => dayjs());

  const [viewingMonth, setViewingMont] = useReducer(
    MonthViewReducer,
    currentDate.format("MM")
  );

  const [viewingMonthDates, setViewMonthDates] = useState(() =>
    CompleteCalenderView(currentDate.format("YYYY"), viewingMonth)
  );
  const [viewingMonthEvents, setViewingMonthEvents] = useState(() =>
    eventForViewMonth(viewingMonth, holidayData.hoidays)
  );

  // useEffect(() => {
  //   const updateViewingMonth = CompleteCalenderView(year, month);
  //   setViewingMont(updateViewingMonth);
  // }, [year, month]);

  return (
    <div>
      {JSON.stringify(viewingMonth)}
      {/* <CalenderHeader
        year={year}
        month={month}
        viewOtherMonth={viewOtherMonth}
      /> */}
      {/* <WeekTitles containerValues={WEEKDAYS} />
      <CalenderWeek containerValues={viewingMonth} /> */}
    </div>
  );
}

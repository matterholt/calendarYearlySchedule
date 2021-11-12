import dayjs from "dayjs";

function getNumberOfdayinMonth(monthValue, year = "2021") {
    return dayjs(`${year}-${monthValue}-01`).daysInMonth();
  }
  function PreviousMonth(month, year) {
    const weekStartsOn = 1;
    const firstOfMonthDay = dayjs(`${year} - ${month} - 01`).day();
    if (firstOfMonthDay === 0) {
      return [];
    }
    const previousMonthDayShown = firstOfMonthDay - weekStartsOn;
  
    const perviousMonth = Array.apply(null, Array(previousMonthDayShown)).map(
      (x, y) => null
    );
    return perviousMonth;
  }
  
  function getMonthsInAYear() {
    const months = Array.apply(null, Array(12)).map((x, y) => {
      return dayjs().month(y);
    });
    return months;
  }
  
  function monthDates(numOfdays, Mth, Yr) {
    const lastMonthShownCurrentMonth = PreviousMonth(Mth, Yr);
    // need to return an object that has dates and wkNumber {wk:45,dates:[1,2,3,4,5,6,7]}
    const days = Array.apply(null, Array(numOfdays)).map((x, y) => y + 1);
    return [...lastMonthShownCurrentMonth, ...days];
  }




  export function monthsForTheYear (monthViewed=12){
    const months = Array.apply(null, Array(monthViewed)).map((x, monthIndex) => {
        return dayjs().month(monthIndex);
      });
      return months;
  }
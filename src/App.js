import "./styles.css";
import { CalenderView } from "./components";
import { ActiveHolidays } from "./components/holidaySchedule/ActiveHolidays";

import holidaySchedule from "./utils/HolidayDates";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ fontWeight: 900, fontSize: 25 }}>Month Planner</h1>
      {/* <CalenderView /> */}
      <div>
        <h2 style={{ fontWeight: 700, fontSize: 20 }}>Days Scheduled off</h2>
        <ActiveHolidays holidaySchedule={holidaySchedule.holiday} />
      </div>
    </div>
  );
}

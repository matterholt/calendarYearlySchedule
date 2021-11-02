import "./styles.css";
import { CalenderView } from "./components";
import { OverviewContainer } from "./components/holidayOverview/OverviewContainer";

import holidaySchedule from "./utils/HolidayDates";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ fontWeight: 900, fontSize: 25 }}>Month Planner</h1>
      {/* <CalenderView /> */}
      <div>
        <OverviewContainer holidaySchedule={holidaySchedule} />
      </div>
    </div>
  );
}

import "./styles.css";
import { CalenderView } from "./components";
import { OverviewContainer } from "./components/holidayOverview/OverviewContainer";
import {YearView}from './components/yearlyCalender/YearView'
import holidaySchedule from "./utils/HolidayDates";


export default function App() {
  return (
    <div className="App">
      <h1 style={{ fontWeight: 900, fontSize: 25 }}>Month Planner</h1>
\
      {/* <CalenderView /> */}
      <YearView/>
      <div style={{height:"80vh"}}>

      </div>
      <div>
        <OverviewContainer holidaySchedule={holidaySchedule} />
      </div>
    </div>
  );
}
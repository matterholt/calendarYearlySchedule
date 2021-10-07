import "./styles.css";
import { PlannedCalender, MonthLayout, CalenderView } from "./components";
export default function App() {
  return (
    <div className="App">
      <h1>Month Planner</h1>
      <CalenderView />
    </div>
  );
}

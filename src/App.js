import "./styles.css";
import { Center,Heading} from "@chakra-ui/react"

import { CalenderView } from "./components";
import { OverviewContainer } from "./components/holidayOverview/OverviewContainer";
import {YearView}from './components/yearlyCalender/YearView'
import holidaySchedule from "./utils/HolidayDates";


export default function App() {
  return (
    <div className="App">
      <Heading>Month Planner</Heading>
        <Center h="max" pb="10">
         <YearView/>
        </Center>
        <Center h="max" pb="10">
         <CalenderView />
        </Center>
        <Center h="max" pb="10">
          <OverviewContainer holidaySchedule={holidaySchedule} />
        </Center>
    </div>
  );
}
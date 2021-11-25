import "./styles.css";
import {useState} from 'react'
import { Center,Heading} from "@chakra-ui/react"


import {DaysScheduledOff,YearView} from './components'

import holidaySchedule from "./utils/HolidayDates";


export default function App() {
  const [viewingYear, setViewingYear ] = useState("2021")
  return (
    <div className="App">
      <Heading viewingYear={viewingYear}>Month Planner</Heading>
      
        <Center h="max" pb="10">
         <YearView/>
        </Center>

        <Center h="max" pb="10">
          <DaysScheduledOff holidaySchedule={holidaySchedule} />
        </Center>

    </div>
  );
}
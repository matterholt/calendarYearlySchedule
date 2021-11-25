
import { Heading } from "@chakra-ui/react";
import { ActiveHolidays } from "./ActiveHolidays";

import {ScheduleModal}from './ScheduleModal'

export const DaysScheduledOff = (props) => {
  const { holidaySchedule } = props;
  const { nationalHolidays, sceduledHolidays } = holidaySchedule;

  return (
    <ScheduleModal>
      <Heading>Days Scheduled off</Heading>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <ActiveHolidays
          holidayTypeTitle="National Holidays"
          holidays={nationalHolidays}
          specBgColor="blue.100"
        />
        <ActiveHolidays
          holidayTypeTitle="Scheduled Shutdown"
          holidays={sceduledHolidays}
          specBgColor="green.100"
        />
      </div>
    </ScheduleModal>
  );
};

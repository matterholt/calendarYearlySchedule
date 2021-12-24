import React, { useState } from "react";
import dayjs from "dayjs";
import { Wrap , Center} from "@chakra-ui/react";
import { getMonthsInAYear } from "../../utils/utilFunctions";

import { holidayDays } from "../../storage/holidayDays";
import { MonthContainer } from "./";

export const CalenderBody = (props) => {
  const { yearToView } = props;
  const monthsInAYear = getMonthsInAYear();

  const [eventsOfTheYear, setEventsOfTheYear] = useState(() =>
    holidayDays.filter((x) => x.isobserved)
  );

  return (
    <Center>

    <Wrap w="1880px" p="4">
      {monthsInAYear.map((monthValue, y) => {
        const eventsForTheMonth = eventsOfTheYear.filter((event) => {
          const checkMonth = dayjs(event.date).format("MM");
          const foundEvent = Number(checkMonth) === monthValue;
          return foundEvent ? event : null;
        });
        return (
          <MonthContainer
          key={`${monthValue}_${y}`}
          monthValue={monthValue}
          yearToView={yearToView}
          eventsForTheMonth={eventsForTheMonth}
          />
          );
        })}
    </Wrap>
        </Center>
  );
};

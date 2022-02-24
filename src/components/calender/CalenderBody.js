import React, { useState } from "react";
import dayjs from "dayjs";
import { Wrap ,Flex, Center,VStack,HStack} from "@chakra-ui/react";
import { getMonthsInAYear } from "../../utils/utilFunctions";

import { holidayDays } from "../../utils/storage/holidayDays";
import { MonthContainer } from "./";

export const CalenderBody = (props) => {
  const { yearToView } = props;
  const monthsInAYear = getMonthsInAYear();

  const [eventsOfTheYear, setEventsOfTheYear] = useState(() =>
    holidayDays.filter((x) => x.isobserved)
  );

  return (
<div style={{display:"flex"}}>
    <Flex h="1880px" w="1440px" p="4" direction="column" wrap="wrap" >
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
    </Flex>
    <VStack>
    <h3>List of events</h3>
    {/* <p>{JSON.stringify(eventsOfTheYear)}</p> */}
    {eventsOfTheYear.map(x=>
    <HStack key={x.id} spacing={8} >
      <p>{x.holiday}</p>
      <p>{x.date}</p>
    </HStack>)}
    </VStack>
    </div>
  )
};

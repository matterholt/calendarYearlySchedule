import React from "react";
import dayjs from "dayjs";
import { Text, Box, Grid ,Heading} from "@chakra-ui/react";
import { currentMonthConstruct } from "../../utils/utilFunctions";
import { DateContainer, WeekDayHeader } from "./";

export const MonthContainer = (props) => {
  const { monthValue, yearToView, eventsForTheMonth } = props;
  const dates = currentMonthConstruct(monthValue, yearToView);
  const { monthName, viewDates } = dates;
  return (
    <Box bg="gray.50" p={4} borderRadius="sm">
      <Heading p="4" textAlign="center">{monthName}</Heading>
      <WeekDayHeader />
      <Grid templateColumns="repeat(7, 1fr)" gap={6} bg="white" color="black">
        {viewDates.map((day) => {
          const event = eventsForTheMonth.find((event) => {
            return dayjs(event.date).format("DD") === String(day);
          });

          return <DateContainer x={day} dayHasEvent={event} />;
        })}
      </Grid>
    </Box>
  );
};

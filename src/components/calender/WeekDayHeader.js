import { Text, Center } from "@chakra-ui/react";
import { GridCalender } from "./";

export const WeekDayHeader = () => {
  const daysOfTheWeek = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <GridCalender>
      {daysOfTheWeek.map((x) => (
        <Center>
          <Text px="4" bg="gr">
            {x}
          </Text>
        </Center>
      ))}
    </GridCalender>
  );
};

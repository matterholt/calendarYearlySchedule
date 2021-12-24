import { Text, Center } from "@chakra-ui/react";
import { GridCalender } from "./";

export const WeekDayHeader = () => {
  const daysOfTheWeek = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <GridCalender customBG="gray.100" p="4">
      {daysOfTheWeek.map((x) => (
        <Center>
          <Text fontWeight={900}>
            {x}
          </Text>
        </Center>
      ))}
    </GridCalender>
  );
};

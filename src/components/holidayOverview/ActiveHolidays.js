import { useState } from "react";
import {
  ListItem,
  List,
  Box,
  Flex,
  Heading,
  Text,
  Grid
} from "@chakra-ui/react";

import { HolidayItem } from "./HolidayItem";

const HolidayHeader = (props) => {
  const { holidayTypeTitle } = props;
  return (
    <Grid templateColumns="1fr 50px" gap={6}>
      <Heading align="center" fontSize="lg" p="5">
        {holidayTypeTitle}
      </Heading>
      <Box bg="orange.200">
        <Text> TESTING </Text>
      </Box>
    </Grid>
  );
};

export const ActiveHolidays = ({ holidays, holidayTypeTitle, specBgColor }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Box flex="1" mx="5">
      <HolidayHeader holidayTypeTitle={holidayTypeTitle} />
      <List>
        {holidays.map((holiday) => (
          <HolidayItem specBgColor={specBgColor} holiday={holiday} />
        ))}
      </List>
    </Box>
  );
};

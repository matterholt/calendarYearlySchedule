import { ListItem, Flex, Text } from "@chakra-ui/react";

export const HolidayItem = (props) => {
  const { specBgColor, holiday } = props;
  const { id, eventName, dateStart, dateEnd } = holiday;

  return (
    <ListItem key={id} mb="5" borderColor={specBgColor} borderBottom="1px">
      <Flex justify="space-between" p="2">
        <Text fontSize="xs">
          {dateStart}
          {dateEnd ? `- ${dateEnd}` : null}
        </Text>
        <Text flex="1" ml="10" align="left">
          {eventName}
        </Text>
      </Flex>
    </ListItem>
  );
};

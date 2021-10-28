import { ListItem, UnorderedList } from "@chakra-ui/react";

export const ActiveHolidays = ({ holidaySchedule }) => {
  return (
    <div>
      <h2>Plant Shutdown Schedule</h2>
      <UnorderedList>
        {holidaySchedule.map((x) => (
          <ListItem key={x.id}>
            {x.eventName} , {x.date}
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  );
};

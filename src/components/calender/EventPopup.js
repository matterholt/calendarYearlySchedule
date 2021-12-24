import React from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  Button,
  Circle
} from "@chakra-ui/react";



export const EventPopup = (props) => {
  const { date, eventDets } = props;
  return (
    <Popover>
      <PopoverTrigger>
        <Button borderRadius="full" bg="blue.200">
          {date}
        </Button>
      </PopoverTrigger>
      <PopoverContent color="blue.800" borderColor="blue.800">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader textAlign="center">{eventDets.holiday}</PopoverHeader>
      </PopoverContent>
    </Popover>
  );
};
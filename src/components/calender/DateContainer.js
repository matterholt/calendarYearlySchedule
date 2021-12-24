import React from "react";
import { Text, Circle } from "@chakra-ui/react";
import {EventPopup} from './'

export const DateContainer = (props) => {
  const { x, dayHasEvent } = props;

  return (
    <Circle size="40px" >
      {dayHasEvent ? (
        <EventPopup date={x} eventDets={dayHasEvent} />
      ) : (
        <Text key={x}>
          {x}
        </Text>
      )}
    </Circle>
  );
};

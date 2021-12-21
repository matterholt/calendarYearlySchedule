import React from "react";
import { Text, Circle } from "@chakra-ui/react";

export const DateContainer = (props) => {
  const { x, dayHasEvent } = props;

  return (
    <Circle
      size="40px"
      bg={dayHasEvent ? "red" : "white"}
      color={dayHasEvent ? "white" : "black"}
    >
      <Text key={x} p={2}>
        {x}
      </Text>
    </Circle>
  );
};

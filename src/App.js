import dayjs from "dayjs";
import React, { useReducer } from "react";
import { CalenderBody } from "./components/calender";
import { Header } from "./components/header";
import {Container,Center,Box}from "@chakra-ui/react";

const IcrementReducer = (state, action) => {
  switch (action.type) {
    case "next":
      return dayjs(state).add(1, "year");
    case "previous":
      return dayjs(state).subtract(1, "year");
    case "current":
      return dayjs();
    default:
      throw new Error();
  }
};
const intialState = dayjs();


export default function App() {
  const [yearToView, yearDispatch] = useReducer(IcrementReducer, intialState);

  return (
    <Box >
      <Header
        yearDispatch={yearDispatch}
        yearToView={yearToView.format("YYYY")}
      />
  
        <CalenderBody yearToView={yearToView.format("YYYY")} />

  

    </Box>
  );
}

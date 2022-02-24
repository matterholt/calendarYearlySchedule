import { useState } from "react";
import {
  Heading,
  Button,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";

export const YearControl = (props) => {
    const { yearToView, yearDispatch } = props;
    return (
      <ButtonGroup>
        <Button onClick={() => yearDispatch({ type: "previous" })}>PREV</Button>
        <Box>
          <Heading  size='xl' as="h2">{yearToView}</Heading>
        </Box>
        <Button onClick={() => yearDispatch({ type: "next" })}>NEXT</Button>
        <Button onClick={() => yearDispatch({ type: "current" })}>C</Button>
      </ButtonGroup>
    );
  };
import { useState } from "react";
import {
  Heading,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Box,
  Input,
  Text
} from "@chakra-ui/react";

const CalenderTitle = (props) => {
  const { title, setTitle } = props;
  const [isActive, setIsActive] = useState(false);
  function handleTitleInput() {
    setTitle("");
    setIsActive(true);
  }
  function handleCloseTitleInput() {
    if (title === "") {
      setTitle("Company");
    }
    setIsActive(false);
  }
  return (
    <Box p="2d" w="xs">
      {isActive ? (
        <Flex>
          <Button mr="2" onClick={() => handleCloseTitleInput()}>
            :::
          </Button>
          <Input
            autoFocus={true}
            size="lg"
            variant="flushed"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Flex>
      ) : (
        <Flex>
          <Button
            fontSize="4xl"
            variant="ghost"
            onClick={() => handleTitleInput()}
          >
            {title}
          </Button>
        </Flex>
      )}
    </Box>
  );
};

const YearControl = (props) => {
  const { yearToView, yearDispatch } = props;
  return (
    <ButtonGroup>
      <Button onClick={() => yearDispatch({ type: "previous" })}>PREV</Button>
      <Box>
        <Heading size="xl">{yearToView}</Heading>
      </Box>
      <Button onClick={() => yearDispatch({ type: "next" })}>NEXT</Button>
      <Button onClick={() => yearDispatch({ type: "current" })}>CURRENT</Button>
    </ButtonGroup>
  );
};

export const Header = (props) => {
  const { yearToView, yearDispatch } = props;
  const [title, setTitle] = useState("Company");

  return (
    <Flex p="10" align="center">
      <CalenderTitle title={title} setTitle={setTitle} />

      <Spacer />
      <YearControl yearDispatch={yearDispatch} yearToView={yearToView} />
    </Flex>
  );
};

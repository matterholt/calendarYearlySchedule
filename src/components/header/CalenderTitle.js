import { useState } from "react";
import {
  Heading,
  Flex,
  Spacer,
  Button,
  Box,
  Input,
  Text
} from "@chakra-ui/react";


export const CalenderTitle = (props) => {
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
              <Heading as="h1">
                
              {title}
              </Heading>
            </Button>
          </Flex>
        )}
      </Box>
    );
  };
  
  
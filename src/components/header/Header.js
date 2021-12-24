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
import {SettingOptions,YearControl,CalenderTitle} from './'



export const Header = (props) => {
  const { yearToView, yearDispatch } = props;
  const [title, setTitle] = useState("Company");

  return (
    <Flex p="10" align="center">
      <SettingOptions/>

      <Spacer />

      <CalenderTitle title={title} setTitle={setTitle} />

      <Spacer />

      <YearControl yearDispatch={yearDispatch} yearToView={yearToView} />

    </Flex>
  );
};

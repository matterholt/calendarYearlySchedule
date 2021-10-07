import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Container
} from "@chakra-ui/react";
import dayjs from "dayjs";
export function MonthLayout() {
  return (
    <Container>
      <h2>{dayjs(10).format("MMMM")}</h2>
      <List>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
      </List>
    </Container>
  );
}

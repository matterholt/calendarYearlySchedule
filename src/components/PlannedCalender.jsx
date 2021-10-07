import {
  Box,
  Center,
  Checkbox,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  VStack,
  TableCaption
} from "@chakra-ui/react";

const DateNumber = (props) => {
  const { date } = props;
  return <Box fontSize="xs">{date}</Box>;
};

const DailyTask = (props) => {
  const { children, date = "00" } = props;
  return (
    <Box bg="white" borderRadius="base" p={2} color="gray.700">
      <DateNumber date={date} />
      <VStack spacing="px">{children}</VStack>
    </Box>
  );
};

const NoTaskDay = (props) => {
  const { children, date = "00" } = props;
  return (
    <Box borderRadius="base" p={2} color="white" bg="gray.700">
      <DateNumber date={date} />
      {children}
    </Box>
  );
};

const TableHead = () => (
  <Thead>
    <Tr>
      <Th>Monday</Th>
      <Th>Tuesday</Th>
      <Th>Wednesday</Th>
      <Th>Thursday</Th>
      <Th>Friday</Th>
      <Th color="white" bg="gray.700">
        Saturday
      </Th>
      <Th color="white" bg="gray.700">
        Sunday
      </Th>
    </Tr>
  </Thead>
);

export function PlannedCalender() {
  return (
    <Center bg="gray.300">
      <Table variant="unstyled" size="lg">
        <TableHead />
        <Tbody>
          <Tr>
            <Td>null</Td>
            <Td>null</Td>
            <Td m="px">
              <DailyTask>Summer Break</DailyTask>
            </Td>
            <Td>
              <DailyTask>Summer Break</DailyTask>
            </Td>
            <Td>
              <DailyTask>
                <Checkbox size="sm">Lesson 1</Checkbox>
                <Checkbox size="sm">Lesson 1</Checkbox>
                <Checkbox size="sm">Chap2 Lesson3</Checkbox>
                <Checkbox size="sm">Read 20 min</Checkbox>
              </DailyTask>
            </Td>
            <Td>
              <NoTaskDay>No Work</NoTaskDay>
            </Td>
            <Td>
              <NoTaskDay>No Work</NoTaskDay>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Center>
  );
}

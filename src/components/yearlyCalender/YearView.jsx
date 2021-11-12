
import dayjs from "dayjs";
import { Flex, Text, Box, Wrap, Grid } from "@chakra-ui/react";
czZ

const MonthContainer = (props) => {
    const { month } = props;
    const monthWritenOut = month.format("MMMM");
    const monthNumber = month.format("M");
    const monthDays = getNumberOfdayinMonth(monthNumber);
    const dates = monthDates(monthDays, Number(monthNumber), 2021);
  
    return (
      <Box bg="royalblue" w="25%" w="300px"  color="white">
        <h3>{monthWritenOut}</h3>
        <Grid templateColumns="repeat(7, 1fr)" gap={4} color="black">
          {dates.map((x) => (
            <Box bg={x ? "" : "gray"}>
              <Text key={x} p={0} color={"black"}>
                {x}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    );
  };
export const YearView = ()=>{
    const monthsInAYear = getMonthsInAYear();
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Wrap  w="100vw" justify="center">
          {monthsInAYear.map((x, y) => (
            <MonthContainer key={`${x}_${y}`} month={x} />
          ))}
        </Wrap>
      </div>
    );
}






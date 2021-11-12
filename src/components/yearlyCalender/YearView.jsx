import {useState}from 'react'
import dayjs from "dayjs";
import { Flex, Text, Box, Wrap, Grid,Heading } from "@chakra-ui/react";

import {monthsForTheYear}from "../../utils/monthlyCalender"


function getNumberOfdayinMonth(monthValue, year = "2021") {
    return dayjs(`${year}-${monthValue}-01`).daysInMonth();
  }
  function PreviousMonth(month, year) {
    const weekStartsOn = 1;
    const firstOfMonthDay = dayjs(`${year} - ${month} - 01`).day();
    if (firstOfMonthDay === 0) {
      return [];
    }
    const previousMonthDayShown = firstOfMonthDay - weekStartsOn;
  
    const perviousMonth = Array.apply(null, Array(previousMonthDayShown)).map(
      (x, y) => null
    );
    return perviousMonth;
  }
  

  
  function monthDates(numOfdays, Mth, Yr) {
    const lastMonthShownCurrentMonth = PreviousMonth(Mth, Yr);
    // need to return an object that has dates and wkNumber {wk:45,dates:[1,2,3,4,5,6,7]}
    const days = Array.apply(null, Array(numOfdays)).map((x, y) => y + 1);
    return [...lastMonthShownCurrentMonth, ...days];
  }

const Month = (props) => {
    const { month } = props;
    const monthWrittenOut = month.format("MMMM");
    const monthNumber = month.format("M");
    const monthDays = getNumberOfdayinMonth(monthNumber);
    const dates = monthDates(monthDays, Number(monthNumber), 2021);
  
    return (
      <Box w="250px">
<Box w="250px" pos="absolute" color="black" zIndex={2} bg="transparent" textAlign="center">
  <Text  fontSize="150px" color="#0000002e" pt="0px"
  fontWeight="extrabold" >{monthNumber}
    </Text>

</Box>
        <Heading as="h3" size="md" textAlign="center" p={3} bg="royalblue"  color="white">{monthWrittenOut}</Heading>
        <Grid templateColumns="repeat(7, 1fr)" gap={1} color="black">
          {dates.map((x) => (
            <Box bg={x ? "" : ""}>
              <Text fontSize="xs" key={x} p={2} color={"black"}>
                {x}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    );
  };


const YearContainer = (props)=>{
    const monthsInAYear = monthsForTheYear();
    const {year}=props
    return(
        <Wrap  w="1040px" justify="center">
          {monthsInAYear.map((x, y) => (
            <Month key={`${x}_${y}`} month={x} />
          ))}
        </Wrap>
    )

}


export const YearView = ()=>{
    const [yearView, setYearView] = useState('2021')
    

    return (
      <div>
        <Heading as="h1"m={4} w="full" textAlign="center">{yearView} Holiday & Shutdown Schedule</Heading>
        <YearContainer year={yearView}/>
      </div>
    );
}






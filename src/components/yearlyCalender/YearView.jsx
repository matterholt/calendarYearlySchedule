import {useState}from 'react'
import dayjs from "dayjs";
import { Center,Flex, Text, Box, Wrap, Grid,Heading ,Button} from "@chakra-ui/react";

import {monthsForTheYear}from "../../utils/monthlyCalender"


  function getNumberOfdayinMonth(mth, year = "2021") {
      return dayjs(`${year}-${mth}-01`).daysInMonth();
    }

  function PreviousMonth(month, year) {
    const weekStartsOn = 1;
   const firstOfMonthDay = dayjs(`${year} - ${month} - 01`).day();
    console.log(firstOfMonthDay)
    if (firstOfMonthDay <= 1) {
      console.log('noting')
      return [];
    }
    const previousMonthDayShown = firstOfMonthDay - weekStartsOn;

    const perviousMonth = Array.apply(null, Array(previousMonthDayShown)).map(
      (x, y) => null

    );

    
    return perviousMonth
  }
  
  function monthDates(numOfdays, Mth, Yr) {
    const lastMonthShownCurrentMonth =  PreviousMonth(Mth, Yr);
    // need to return an object that has dates and wkNumber {wk:45,dates:[1,2,3,4,5,6,7]}
    const days = Array.apply(null, Array(numOfdays)).map((x, y) => y + 1);
    return [...lastMonthShownCurrentMonth, ...days];
  }

const Month = (props) => {
    const { month } = props;
    const monthWrittenOut = month.format("MMMM");
    const monthNumber = month.format("M");
    const monthDays = getNumberOfdayinMonth(monthNumber);
    const dates = monthDates(monthDays,monthNumber, 2021);
  
    return (
      <Box w="250px">
        <Box w="250px" pos="absolute" color="black" zIndex={2} bg="transparent" textAlign="center">
        <Text  fontSize="150px" color="#0000002e" pt="0px"
        fontWeight="extrabold" >{monthNumber}
          </Text>
        </Box>

        <Heading as="h3" size="md" textAlign="center" p={3} bg="royalblue"  color="white">{monthWrittenOut}</Heading>
        <Grid templateColumns="repeat(7, 1fr)" gap={1} color="black">
          {dates.map((x,y) => (
            <Box bg={x ? "" : "" } key={`${x}_${y}`}>
              <Text fontSize="xs"  p={2} color={"black"}>
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
    // get all the data we need here at the start, get all calculations out of the way
    const [fullCalenderYear, setFullCalenderYear] = useState()
    

    return (
      <div>
        <Center>  
                 <Flex w="lg  ">
        <Button>previous</Button>
        <Heading as="h1"m={4} w="full" textAlign="center">{yearView} Holiday & Shutdown Schedule</Heading>
        <Button>next</Button>
        </Flex>
        </Center>

        <YearContainer year={yearView}/>
      </div>
    );
}





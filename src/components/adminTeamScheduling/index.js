import {useState} from 'react';
import {SimpleGrid}from "@chakra-ui/react";
const weekDayContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto',
};

const WeeklyContainer = (props) => {
  const { day } = props;
  return (
      <p>{day}</p>
  );
};

const RowItem = ({ children }) => {
  return <div style={weekDayContainer}>{children}</div>;
};

const WeekHeader = (props) => {
  const { simpletitle, dayliyData,numberOfColumns } = props;
  return (
    <SimpleGrid columns={numberOfColumns} bg="blackAlpha.100">
      <h2>{simpletitle}</h2>
      {dayliyData.map((x) => (
        <WeeklyContainer day={x} />
      ))}
     </SimpleGrid>
  );
};

const TeamScheduler = (props) => {
  const { simpletitle, dayliyData,numberOfColumns } = props;
  return (
    <SimpleGrid columns={numberOfColumns}>
      <h2>{simpletitle}</h2>
      {dayliyData.map((x) => (
        <WeeklyContainer day={x} />
      ))}
    </SimpleGrid>
  ); 
};

const WeekSchedule = (props) => {
  const {numberOfdaysInMonth} = props

  const userSchedules = [
    {
      name: 'Jimbo',
      week: [
        {
          wkNo: 1,
          shedule: ['office', 'home', 'PTO', 'sick ', 'home', 'no', 'no'],
        },
        {
          wkNo: 2,
          shedule: ['office', 'home', 'PTO', 'sick ', 'home', 'no', 'no'],
        },
        {
          wkNo: 3,
          shedule: ['office', 'home', 'PTO', 'sick ', 'home', 'no', 'no'],
        },
        {
          wkNo: 4,
          shedule: ['office', 'home', 'PTO', 'sick ', 'home', 'no', 'no'],
        },
      ],
    },
    {
      name: 'Dwight',
      week: [
        {
          wkNo: 1,
          shedule: [
            'office',
            'office',
            'office',
            'office ',
            'office',
            'no work',
            'no work',
          ],
        },
        {
          wkNo: 2,
          shedule: [],
        },
        {
          wkNo: 3,
          shedule: [],
        },
        {
          wkNo: 4,
          shedule: [],
        },
      ],
    },
  ];

  return (
    <div>
      <WeekHeader 
         numberOfColumns = {numberOfdaysInMonth.length +1}
         simpletitle="User Name" dayliyData={numberOfdaysInMonth} />
      {userSchedules.map((teammate) => (
        <TeamScheduler
         numberOfColumns = {numberOfdaysInMonth.length +1}
          simpletitle={teammate.name}
          dayliyData={teammate.week[0].shedule}
        />
      ))}
    </div>
  );
};

 const AdminTeamScheduling = () => {
  const [monthToView, setMonthToView] = useState('January')
  const numberOfdaysInMonth = Array.apply(null, Array(31)).map((x, y) => y);

  return (
    <div>
      <h2>Work Schedule for {monthToView}</h2>
      <WeekSchedule numberOfdaysInMonth={numberOfdaysInMonth}/>
    </div>
  );
};
export default AdminTeamScheduling
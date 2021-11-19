import { CalenderRow } from "./CalenderRow";
import { CalenderDay } from "./CalenderDay";

export const CalenderWeek = (props) => {
  const { numbOfwk, containerValues } = props;
  return (
    <CalenderRow>
      {containerValues.map((x,y) => (
        <CalenderDay key={`${x}_${y}`} dayValue={x.date} />
      ))}
    </CalenderRow>
  );
};

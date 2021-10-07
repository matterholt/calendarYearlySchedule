import { CalenderRow } from "./CalenderRow";
import { CalenderDay } from "./CalenderDay";

export const CalenderWeek = (props) => {
  const { numbOfwk, containerValues } = props;
  return (
    <CalenderRow>
      {containerValues.map((x) => (
        <CalenderDay key={x} dayValue={x.date} />
      ))}
    </CalenderRow>
  );
};

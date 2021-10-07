import { CalenderRow } from "./CalenderRow";
import { CalenderDay } from "./CalenderDay";

export const WeekTitles = (props) => {
  const { containerValues = 0 } = props;
  return (
    <CalenderRow
      customStyle={{ fontWeight: "700", textTransform: "uppercase" }}
    >
      {containerValues.map((x) => (
        <CalenderDay key={x} dayValue={x} />
      ))}
    </CalenderRow>
  );
};

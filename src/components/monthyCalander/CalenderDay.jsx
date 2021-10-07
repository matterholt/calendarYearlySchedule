export const CalenderDay = (props) => {
  const { dayValue = 0 } = props;
  const holiday = "2021-10-25";
  const indicator = dayValue === holiday;
  const customColor = indicator ? { backgroundColor: "red" } : null;
  return (
    <div style={{ border: "solid 1px black" }}>
      <p style={customColor}>{dayValue}</p>
    </div>
  );
};

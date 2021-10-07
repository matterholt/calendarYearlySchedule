import dayjs from "dayjs";

export const CalenderHeader = (props) => {
  const { year, month, viewOtherMonth } = props;
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        <button onClick={() => viewOtherMonth("previousMonth")}>
          Previous
        </button>
        <h2>{month}</h2>
        <button onClick={() => viewOtherMonth("nextMonth")}>NEXT</button>
      </div>
      <p>{year}</p>
    </header>
  );
};

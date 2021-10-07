export const CalenderRow = (props) => {
  const { children, customStyle } = props;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: " repeat(7,  1fr)",
        ...customStyle
      }}
    >
      {children}
    </div>
  );
};

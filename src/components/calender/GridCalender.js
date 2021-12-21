import { Grid } from "@chakra-ui/react";

export const GridCalender = (props) => {
  const { children } = props;
  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={6} bg="white" color="black">
      {children}
    </Grid>
  );
};

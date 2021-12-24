import { Grid } from "@chakra-ui/react";

export const GridCalender = (props) => {
  const { children , customBG="white" } = props;
  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={6} bg={customBG} p="2" color="black">
      {children}
    </Grid>
  );
};

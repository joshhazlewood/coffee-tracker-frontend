import { Container, Typography } from "@material-ui/core";
import { BeanTable } from "../components/BeanTable.js";

export function Coffee() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2">Coffee Beans</Typography>
      <BeanTable />
    </Container>
  );
}

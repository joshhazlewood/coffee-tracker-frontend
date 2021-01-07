import { Container, Typography } from "@material-ui/core";
import { BeanTable } from "../components/BeanTable.js";

export function Coffee({beans}) {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3">Coffee</Typography>
      <BeanTable beans={beans}/>
    </Container>
  );
}

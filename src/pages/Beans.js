import { Container, Typography } from "@material-ui/core";
import { BeanCard } from "../components/BeanCard.js";
import React from "react";

export function Beans() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3">Beans</Typography>
      <BeanCard/>
    </Container>
  );
}

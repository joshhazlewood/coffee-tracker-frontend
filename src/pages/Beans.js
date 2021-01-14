import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { BeanCard } from "../components/BeanCard.js";

export function Beans({beans}) {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3">Beans</Typography>
      <Grid container spacing={2}>
        {beans.map((beans) => (
          <Grid item xs={12} sm={6} lg={4} key={beans.id}>
            <BeanCard beans={beans} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

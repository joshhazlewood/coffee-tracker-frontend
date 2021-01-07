import { Container, Grid, Typography } from "@material-ui/core";
import { BeanCard } from "../components/BeanCard.js";
import React from "react";

export function Beans() {
  const beans = [
    {
      name: "Pacamara Natural",
      roastery: "Atkinsons Coffee",
      countryOfOrigin: "Ethiopia",
      cupProfile: "Papaya / Kirsch / Mango",
    },
    {
      name: "Bethlehem",
      roastery: "Atkinsons Coffee",
      countryOfOrigin: "Colombia",
      cupProfile: "Satsuma / Blackcurrent / Walnut",
    },
    {
      name: "San Lorenzo",
      roastery: "Atkinsons Coffee",
      countryOfOrigin: "Costa Rica",
      cupProfile: "Blackcurrent / Hops / Dark Rum",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h3">Beans</Typography>
      <Grid container spacing={2}>
        {beans.map((beans) => (
          <Grid item xs={12} sm={6} lg={4}>
            <BeanCard beans={beans} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

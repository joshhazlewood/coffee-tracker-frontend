import { Container, Grid, Typography } from "@material-ui/core";
import EspressoShotCard from "../components/EspressoShotCard";

const shots = [
  {
    name: "Pacamara Natural",
    inputWeight: 18,
    outputWeight: 36,
    duration: 25,
    timestamp: new Date(),
    grindSetting: 4,
    notes: "Well balanced shot. Small amount of channelling.",
  },
  {
    name: "Kinini AA",
    inputWeight: 18.5,
    outputWeight: 33,
    duration: 29,
    timestamp: new Date(),
    grindSetting: 3,
    notes: "Well balanced shot. No channelling.",
  },
];

export function Espresso() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Espresso Shots
      </Typography>
      <Grid container spacing={2}>
        {shots.map((shot) => (
          <Grid item xs={12}>
            <EspressoShotCard shot={shot} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

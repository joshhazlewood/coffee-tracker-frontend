import { Container, Fab, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import EspressoForm from "../components/EspressoForm";
import EspressoShotCard from "../components/EspressoShotCard";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    backgroundColor: "#3E3228",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export function Espresso({ shots, setShots }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Espresso Shots
      </Typography>
      <Fab
        color="primary"
        className={classes.fab}
        aria-label="add"
        onClick={() => handleClickOpen()}
      >
        <AddIcon />
      </Fab>
      <Grid container spacing={2}>
        {shots &&
          shots.map((shot) => (
            <Grid item xs={12} key={shot.id}>
              <EspressoShotCard shot={shot} />
            </Grid>
          ))}
      </Grid>
      <EspressoForm open={open} handleClose={handleClose} setShots={setShots} />
    </Container>
  );
}

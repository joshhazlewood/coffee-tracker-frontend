import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import SettingsIcon from "@material-ui/icons/Settings";
import TimerIcon from "@material-ui/icons/Timer";
import { format } from "date-fns";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    minWidth: "300px",
  },
  margin: {
    margin: "0.3em",
  },
  timestamp: {
    height: "100%",
  },
  divider: {
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
});

const formatDate = (date) => {
  return format(date, "HH:mm");
};

export default function EspressoShotCard({ shot }) {
  const classes = useStyles();

  const calculateRatio = (input, output) => {
    const ratio = (output / input).toFixed(1).toString();
    if (ratio.endsWith(".0")) {
      return "1 : " + ratio.substring(0, ratio.length - 2);
    }
    return "1 : " + ratio;
  };

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Grid container align="center">
          <Grid item xs={10} sm={11} align="left">
            <Typography variant="h5">
              {shot.name !== undefined ? shot.name : "Shot Name"}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1} className={classes.timestamp}>
            <Typography variant="subtitle1">
              {shot.timestamp !== undefined
                ? formatDate(shot.timestamp)
                : "hh:mm"}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" className={classes.margin}>
              {" "}
              {shot.inputWeight}
              <small>g</small>{" "}
              <ArrowRightAltIcon style={{ verticalAlign: "middle" }} />{" "}
              {shot.outputWeight}
              <small>g</small>
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle1">
              {calculateRatio(shot.inputWeight, shot.outputWeight)}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle1" className={classes.margin}>
              <TimerIcon style={{ verticalAlign: "middle" }} />
              {shot.duration}s
            </Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Typography variant="subtitle1" className={classes.margin}>
              <SettingsIcon style={{ verticalAlign: "middle" }} />
              {shot.grindSetting !== undefined
                ? shot.grindSetting
                : "Grind setting"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.margin}>
              {shot.notes !== undefined ? shot.notes : "Shot Notes"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

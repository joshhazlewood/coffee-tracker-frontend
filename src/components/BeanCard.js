import { Avatar, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import React from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 1000,
  },
  titleRow: {
    display: "flex",
  },
});

export function BeanCard({beans}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container xs={12}>
          <Grid item xs={2} sm={2}>
            <Avatar src="/coffee-beans.jpg" />
          </Grid>
          <Grid item xs={10} sm={10}>
            <Grid item>
              <Typography variant="h5" component="h5" >
                {beans.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.roasteryLabel}
                variant="subtitle2"
                color="textSecondary"
              >
                {beans.roastery}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={1}>
            <LocationOnIcon />
          </Grid>
          <Grid item xs={11}>
            <Typography component="h6">
            {beans.countryOfOrigin}
            </Typography>
          </Grid>
        </Grid>
        <Grid container >
          <Grid item xs={1}>
            <LocalCafeIcon />
          </Grid>
          <Grid item xs={11}>
            <Typography component="h6">
            {beans.cupProfile}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

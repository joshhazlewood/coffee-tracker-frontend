import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { AppBarWrapper } from "../components/AppBarWrapper";
import { Beans } from "../pages/Beans";
import { Coffee } from "../pages/Coffee";
import { Espresso } from "../pages/Espresso";
import { Home } from "../pages/Home";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const beanData = [
  {
    id: 1,
    name: "Pacamara Natural",
    roastery: "Atkinsons Coffee",
    countryOfOrigin: "Ethiopia",
    cupProfile: "Papaya / Kirsch / Mango",
  },
  {
    id: 2,
    name: "Bethlehem",
    roastery: "Atkinsons Coffee",
    countryOfOrigin: "Colombia",
    cupProfile: "Satsuma / Blackcurrent / Walnut",
  },
  {
    id: 3,
    name: "San Lorenzo",
    roastery: "Atkinsons Coffee",
    countryOfOrigin: "Costa Rica",
    cupProfile: "Blackcurrent / Hops / Dark Rum",
  },
];

const bagData = [
  {
    name: "Pacamara Natural",
    roastDate: Date.now(),
    initialQuantity: 250,
    currentQuantity: 18,
  },
  {
    name: "Bethlehem",
    roastDate: Date.now(),
    initialQuantity: 250,
    currentQuantity: 250,
  },
  {
    name: "San Lorenzo",
    roastDate: Date.now(),
    initialQuantity: 250,
    currentQuantity: 160,
  },
];

export function NavContainer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [beans, setBeans] = useState(beanData);
  const [bags, setBags] = useState(bagData);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerItems = (
    <List>
      {[
        { text: "Home", route: "" },
        { text: "Coffee", route: "coffee" },
        { text: "Espresso Shots", route: "espresso" },
        { text: "Beans", route: "beans" },
      ].map((item, index) => (
        <ListItem button key={item.text} component={Link} to={"/" + item.route}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  const drawer = (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      {drawerItems}
    </Drawer>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarWrapper open={open} handleDrawerOpen={handleDrawerOpen} />
      <Router>
        {drawer}
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/coffee">
              <Coffee beans={bags}/>
            </Route>
            <Route path="/espresso">
              <Espresso />
            </Route>
            <Route path="/beans">
              <Beans beans={beans} />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

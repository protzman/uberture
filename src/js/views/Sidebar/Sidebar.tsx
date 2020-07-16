import React from "react";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Paper,
} from "@material-ui/core";
import { Sort, Search, HelpOutline } from "@material-ui/icons";
import Logo from "../../../images/kg.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: "100vh",
    },
    root: {
      flexGrow: 1,
    },
    logo: {
      marginRight: theme.spacing(2),
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    sortButton: {
      marginLeft: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      padding: theme.spacing(0, 2),
    },
    inputInput: {
      padding: theme.spacing(1),
      width: "100%",
    },
  })
);

export default function Sidebar() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Avatar className={classes.logo} src={Logo} variant="square" />
          <div className={classes.search}>
            <InputBase
              fullWidth
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              startAdornment={
                <IconButton color="inherit" size="small" disabled>
                  <Search />
                </IconButton>
              }
              endAdornment={
                <IconButton color="inherit" size="small">
                  <HelpOutline />
                </IconButton>
              }
            />
          </div>
          <IconButton
            className={classes.sortButton}
            color="inherit"
            size="medium"
          >
            <Sort />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}

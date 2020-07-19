import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    appbar: {
      top: "auto",
      bottom: 0,
    },
    spacer: {
      flexGrow: 1,
    },
  })
);

export default function Topbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <div className={classes.spacer} />
          <Pagination count={10} />
          <div className={classes.spacer} />
        </Toolbar>
      </AppBar>
    </>
  );
}

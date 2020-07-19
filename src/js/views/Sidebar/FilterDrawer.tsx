import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      minWidth: "25%",
    },
    drawerPaper: {
      minWidth: "25%",
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface Props {
  onClose(): void;
  open: boolean;
}

export default function FilterDrawer({ open, onClose }: Props) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      elevation={0}
      anchor="left"
      open={open}
      ModalProps={{
        hideBackdrop: true,
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Filter Articles
          </Typography>
          <IconButton color="inherit" onClick={onClose}>
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Drawer>
  );
}

import React, { useState } from "react";
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
  InputBase,
  Badge,
} from "@material-ui/core";
import { Sort, Search, HelpOutline } from "@material-ui/icons";
import Logo from "../../../images/kg.svg";
import SearchDialog from "./SearchDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    logoButton: {
      marginRight: theme.spacing(2),
    },
    actionButton: {
      marginLeft: theme.spacing(2),
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

interface Props {
  openFilterDrawer(): void;
}

export default function Topbar({ openFilterDrawer }: Props) {
  const classes = useStyles();
  const [isOpen, setDialogOpen] = useState(false);

  const openSearchDialog = () => {
    setDialogOpen(true);
  };

  const closeSearchDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            className={classes.logoButton}
            color="inherit"
            size="medium"
          >
            <Avatar className={classes.logo} src={Logo} variant="square" />
          </IconButton>
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
            />
          </div>
          <IconButton
            className={classes.actionButton}
            color="inherit"
            onClick={openSearchDialog}
          >
            <HelpOutline />
          </IconButton>
          <Badge badgeContent={3} color="primary" overlap="circle">
            <IconButton
              className={classes.actionButton}
              color="inherit"
              onClick={openFilterDrawer}
            >
              <Sort />
            </IconButton>
          </Badge>
        </Toolbar>
        <SearchDialog open={isOpen} onClose={closeSearchDialog} />
      </AppBar>
    </>
  );
}

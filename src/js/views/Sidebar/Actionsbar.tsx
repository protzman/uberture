import React, { useState } from "react";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { Fullscreen, FullscreenExit, GetApp } from "@material-ui/icons";
import Logo from "../../../images/kg.svg";
import SearchDialog from "./SearchDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoButton: {
      marginRight: theme.spacing(2),
    },
    actionButton: {
      marginLeft: theme.spacing(2),
    },
    spacer: {
      flexGrow: 1,
    },
  })
);
interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles((theme: Theme) =>
  createStyles({
    indicator: {
      paddingLeft: theme.spacing(8),
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > span": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
      },
    },
  })
)((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(8),
      textTransform: "none",
      color: "#fff",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      "&:focus": {
        opacity: 1,
      },
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

export default function Actionsbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          {/* <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="Most Relevant" />
            <StyledTab label="Most Recent" />
          </StyledTabs> */}
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Most Relevant" />
            <Tab label="Most Recent" />
          </Tabs>
          <div className={classes.spacer} />
          <IconButton
            className={classes.actionButton}
            color="inherit"
            size="medium"
          >
            <GetApp />
          </IconButton>
          <IconButton
            className={classes.actionButton}
            color="inherit"
            size="medium"
          >
            <Fullscreen />
          </IconButton>
          <IconButton
            className={classes.actionButton}
            color="inherit"
            size="medium"
          >
            <FullscreenExit />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

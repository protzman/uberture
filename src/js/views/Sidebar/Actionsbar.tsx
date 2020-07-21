import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Tab,
  Tabs,
} from "@material-ui/core";
import {
  Fullscreen,
  FullscreenExit,
  GetApp,
  ImportExport,
} from "@material-ui/icons";

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

interface Props {
  toggleCompactView(): void;
  compact: boolean;
}

export default function Actionsbar({ compact, toggleCompactView }: Props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          {/* <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Most Relevant" />
            <Tab label="Most Recent" />
          </Tabs> */}
          <div className={classes.spacer} />
          <Button color="primary" startIcon={<ImportExport />}>
            Recent
          </Button>
          <IconButton className={classes.actionButton} color="inherit">
            <GetApp />
          </IconButton>
          <IconButton
            className={classes.actionButton}
            color="primary"
            onClick={toggleCompactView}
          >
            {compact ? <FullscreenExit /> : <Fullscreen />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

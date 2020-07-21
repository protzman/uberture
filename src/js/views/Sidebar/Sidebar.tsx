import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Topbar from "./Topbar";
import Actionsbar from "./Actionsbar";
import Botbar from "./Botbar";
import ArticleContainer from "./ArticleContainer";
import FilterDrawer from "./FilterDrawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: "100vh",
      borderRadius: 0,
    },
  })
);

export default function Sidebar() {
  const classes = useStyles();
  const [isOpen, setDrawerOpen] = useState(false);
  const [compact, setCompactView] = useState(false);

  const openFilterDrawer = () => {
    setDrawerOpen(true);
  };

  const closeFilterDrawer = () => {
    setDrawerOpen(false);
  };

  const toggleCompactView = () => {
    setCompactView(!compact);
  };

  return (
    <Paper className={classes.paper}>
      <Topbar openFilterDrawer={openFilterDrawer} />
      <Actionsbar compact={compact} toggleCompactView={toggleCompactView} />
      <ArticleContainer compact={compact} />
      <Botbar />
      <FilterDrawer open={isOpen} onClose={closeFilterDrawer} />
    </Paper>
  );
}

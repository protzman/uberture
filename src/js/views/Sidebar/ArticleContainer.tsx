import React from "react";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import FakeArticle from "./FakeArticle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // 3 heights of appbar components
      height: `calc(100vh - ${theme.spacing(8)}px - ${theme.spacing(
        8
      )}px - ${theme.spacing(8)}px)`,
      overflowY: "scroll",
    },
  })
);

export default function ArticleContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid item>
          <FakeArticle />
        </Grid>
        <Grid item>
          <FakeArticle />
        </Grid>
        <Grid item>
          <FakeArticle />
        </Grid>
        <Grid item>
          <FakeArticle />
        </Grid>
      </Grid>
    </div>
  );
}

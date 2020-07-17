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

enum topics {
  domestic = "domestic",
  local = "local",
  world = "world",
  government = "government",
}

const articles = [
  {
    label: "Domestic",
    type: topics.domestic,
  },
  {
    label: "Local news",
    type: topics.local,
  },
  {
    label: "Domestic",
    type: topics.domestic,
  },
  {
    label: "World Events and Military",
    type: topics.world,
  },
  {
    label: "Govetnment and Politics",
    type: topics.government,
  },
];

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
        {articles.map((article) => (
          <Grid item>
            <FakeArticle article={article} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
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
    key: 1,
    label: "Domestic",
    type: topics.domestic,
  },
  {
    key: 2,
    label: "Local news",
    type: topics.local,
  },
  {
    key: 3,
    label: "Domestic",
    type: topics.domestic,
  },
  {
    key: 4,
    label: "World Events and Military",
    type: topics.world,
  },
  {
    key: 5,
    label: "Govetnment and Politics",
    type: topics.government,
  },
];

interface Props {
  compact: boolean;
}
export default function ArticleContainer({ compact }: Props) {
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
          <Grid item key={article.key}>
            <FakeArticle article={article} compact={compact} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

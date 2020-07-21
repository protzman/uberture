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
  government = "government",
  advertising = "advertising",
  world = "world",
  religion = "religion",
  energy = "energy",
  local = "local",
  domestic = "domestic",
  weather = "weather",
  middle = "middle",
  social = "social",
}

const articles = [
  {
    key: 0,
    label: "Government and Politics",
    type: topics.government,
  },
  {
    key: 1,
    label: "Advertising",
    type: topics.advertising,
  },
  {
    key: 2,
    label: "World Events and Military",
    type: topics.world,
  },
  {
    key: 3,
    label: "Religion and Intl Relations",
    type: topics.religion,
  },
  {
    key: 4,
    label: "Energy",
    type: topics.energy,
  },
  {
    key: 5,
    label: "Local News",
    type: topics.local,
  },
  {
    key: 6,
    label: "Domestic",
    type: topics.domestic,
  },
  {
    key: 7,
    label: "Weather",
    type: topics.weather,
  },
  {
    key: 8,
    label: "Middle East",
    type: topics.middle,
  },
  {
    key: 9,
    label: "Social Issues",
    type: topics.social,
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

import React from "react";
import {
  createStyles,
  fade,
  lighten,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import { Paper, Box, Grid, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

enum topics {
  domestic = "domestic",
  local = "local",
  world = "world",
  government = "government",
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    paper: ({ article, compact }: Props) => ({
      backgroundColor: fade(theme.palette.background.default, 0.2),
      borderLeft: `${theme.spacing(1)}px solid ${
        theme.palette.topics[article.type]
      }`,
      borderRight: `${theme.spacing(1)}px solid ${
        theme.palette.topics[article.type]
      }`,
      margin: theme.spacing(1, 2),
      minHeight: !compact ? 500 : 300,
    }),
    container: ({ article, compact }: Props) => ({
      marginTop: !compact ? -36 : 0,
    }),
    tag: ({ article }: Props) => ({
      position: "relative",
      zIndex: 100,
      top: 0,
      left: 0,
      borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
      backgroundColor: `${theme.palette.topics[article.type]}`,
      "&:hover": {
        backgroundColor: lighten(`${theme.palette.topics[article.type]}`, 0.2),
      },
      "&:active": {
        backgroundColor: `${theme.palette.topics[article.type]}`,
      },
    }),
  })
);

interface Props {
  article: {
    label: string;
    type: topics;
  };
  compact: boolean;
}

export default function FakeArticle({ article, compact }: Props) {
  const classes = useStyles({ article, compact });
  return (
    <Paper className={classes.paper}>
      <Button disableElevation className={classes.tag} variant="contained">
        {article.label}
      </Button>
      <div className={classes.container}>
        {!compact && <Skeleton variant="rect" height={200} />}
        <Box paddingTop={1} paddingX={2}>
          <Skeleton height={40} />
          <Skeleton height={40} width="60%" />
          <Skeleton height={20} width="30%" />
        </Box>
        <Box paddingTop={1} paddingX={2}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={3}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={3}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={3}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={3}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={3}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={3}>
              <Skeleton height={30} />
            </Grid>
            <Grid item xs={2}>
              <Skeleton height={30} />
            </Grid>
          </Grid>
        </Box>
        <Box paddingY={1} paddingX={2}>
          <Skeleton height={40} width="20%" />
        </Box>
      </div>
    </Paper>
  );
}

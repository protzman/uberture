import React from "react";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import { Paper, Box, Grid, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: fade(theme.palette.background.default, 0.2),
      borderLeft: `${theme.spacing(1)}px solid ${theme.palette.primary.main}`,
      margin: theme.spacing(2),
      height: 500,
    },
    container: {
      marginTop: -36,
    },
    tag: {
      position: "relative",
      zIndex: 100,
      top: 0,
      left: 0,
      borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
    },
  })
);

export default function FakeArticcle() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Button
        disableElevation
        className={classes.tag}
        color="primary"
        variant="contained"
      >
        Domestic
      </Button>
      <div className={classes.container}>
        <Skeleton variant="rect" height={200} />
        <Box marginTop={1} marginX={2}>
          <Skeleton height={40} />
          <Skeleton height={40} width="60%" />
          <Skeleton height={20} width="30%" />
        </Box>
        <Box marginTop={1} marginX={2}>
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
        <Box marginTop={1} marginX={2}>
          <Skeleton height={40} width="20%" />
        </Box>
      </div>
    </Paper>
  );
}

import React from "react";
import {
  ThemeProvider,
  createStyles,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import { CssBaseline, Grid } from "@material-ui/core";
import "mapbox-gl/dist/mapbox-gl.css";
import Sidebar from "../Sidebar/Sidebar";
import Map from "../Map/Map";
import Timeline from "../../components/Timeline";

import { theme } from "../../../theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mapContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    timelineContainer: {
      height: "200px",
      width: "100%",
      position: "absolute",
      bottom: "16px",
      left: "0px",
    },
  })
);

function App() {
  // TODO : resolve small screen size issue (min width)
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <div className={classes.mapContainer}>
            <Map />
            <div className={classes.timelineContainer}>
              <Timeline />
            </div>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Grid } from "@material-ui/core";

import Sidebar from "../Sidebar/Sidebar";
import Map from "../Map/Map";
import Timeline from "../../components/Timeline";

import { theme } from "../../../theme";

function App() {
  // TODO : resolve small screen size issue (min width)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <div
            className="map-container"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Map />
            <div
              style={{
                height: "200px",
                width: "100%",
                position: "absolute",
                bottom: "16px",
                left: "0px",
              }}
            >
              <Timeline />
            </div>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

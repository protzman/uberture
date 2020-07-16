import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Grid } from "@material-ui/core";

import Sidebar from "../Sidebar/Sidebar";

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
          map..
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

// look here for the colors: https://www.nordtheme.com/docs/colors-and-palettes

const colors = {
  nord00: "#2E3440", // dark grey
  nord01: "#3B4252", // lighter than ^
  nord02: "#434C5E", // lighter than ^
  nord03: "#4C566A", // light grey
  nord04: "#D8DEE9", // dark white
  nord05: "#E5E9F0", // mid white
  nord06: "#ECEFF4", // light white
  nord07: "#8FBCBB", // teal blue
  nord08: "#88C0D0", // light blue
  nord09: "#81A1C1", // pale blue
  nord10: "#5e81ac", // blue
  nord11: "#BF616A", // red
  nord12: "#D08770", // orange
  nord13: "#EBCB8B", // yellow
  nord14: "#A3BE8C", // green
  nord15: "#B48EAD", // purple
  palette00: "#BF616A",
  palette01: "#D08770",
  palette02: "#DEA97E",
  palette03: "#EBCB8B",
  palette04: "#C7C58C",
  palette05: "#A3BE8C",
  palette06: "#81A09C",
  palette07: "#5E81AC",
  palette08: "#8988AD",
  palette09: "#B48EAD",
};

export const theme = createMuiTheme({
  // shadows: ["none"],
  palette: {
    type: "dark",
    background: {
      default: colors.nord04,
      search: colors.nord03,
    },
    topics: {
      government: colors.palette00,
      advertising: colors.palette01,
      world: colors.palette02,
      religion: colors.palette03,
      energy: colors.palette04,
      local: colors.palette05,
      domestic: colors.palette06,
      weather: colors.palette07,
      middle: colors.palette08,
      social: colors.palette09,
    },
    action: {
      active: "#00d1b2",
    },
    primary: {
      main: colors.nord15,
      // main: '#00d1b2'
    },
    secondary: {
      main: colors.nord04,
    },
    text: {
      primary: colors.nord05,
    },
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
    mono: {
      fontFamily: "Roboto Mono, monospace",
    },
    useNextVariants: true,
  },
});

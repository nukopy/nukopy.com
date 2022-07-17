import { createTheme } from "@mui/material";

/*
  constants
*/

export const colors = {
  whitesmoke: "#f5f5f5",
  darkBackgroundColor: "rgba(23, 23, 23, 0.9)",
};

/*
  typography settings
*/

const fontFamily = ["Roboto", "sans-serif"].join(",");
const fontSize = 14; // This is rem unit
const typography = {
  fontFamily,
  fontSize,
  // h1: {
  //   fontSize: fontSize * 10, // 2.5rem
  //   fontWeight: "bold",
  // },
};

/*
  responsive
*/

const breakPoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

/*
  theme list
*/

export const DARK_THEME = "dark";

/*
Dark mode
*/
export const theme = createTheme({
  // ref: Palette https://mui.com/material-ui/customization/palette/
  palette: {
    mode: DARK_THEME,
    background: {
      default: colors.darkBackgroundColor,
      paper: "rgb(0, 0, 0)",
    },
    /*
    primary: {
      main: "rgb(35, 35, 35)",
    },
    secondary: {
      main: "rgba(0, 0, 0, 0.8)",
    },
    */
    text: {
      primary: colors.whitesmoke,
      // secondary: colors.whitesmoke,
    },
  },
  typography,
  // spacing: undefined,
  breakpoints: {
    values: breakPoints,
  },
  // zIndex: undefined,
  // components: undefined,
});

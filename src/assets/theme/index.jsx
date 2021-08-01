import { AppTheme } from "./types"
import { grey, blueGrey } from "@material-ui/core/colors"

const appThemeOptions = {
  [AppTheme.LIGHT]: {
    palette: {
      type: "light",
      common: {
        black: "#000",
        white: "#fff",
      },
      primary: {
        light: "rgba(100, 229, 220, 1)",
        main: "rgba(32, 178, 170, 1)",
        dark: "rgba(0, 130, 123, 1)",
        contrast: "#fff",
      },
      secondary: {
        light: "rgba(113, 135, 146, 1)",
        main: "rgba(69, 90, 100, 1)",
        dark: "rgba(55, 71, 79, 1)",
        contrast: "#fff",
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      text: {
        primary: blueGrey[700],
        secondary: blueGrey[400],
        disabled: grey.A200,
        hint: grey.A200,
      },
      donut: {
        bg: "#d2d3d4",
      },
      cellBorder: {
        color: "rgba(113, 135, 146, 1)",
      },
      background: {
        paper: "#fff",
        default: "#fafafa",
      },
    },
  },
  [AppTheme.DARK]: {
    palette: {
      type: "dark",
      common: {
        black: "#000",
        white: "#fff",
      },
      primary: {
        light: "rgba(100, 229, 220, 1)",
        main: "rgba(32, 178, 170, 1)",
        dark: "rgba(0, 130, 123, 1)",
        contrast: "#fff",
      },
      secondary: {
        light: "rgba(113, 135, 146, 1)",
        main: "rgba(69, 90, 100, 1)",
        dark: "rgba(55, 71, 79, 1)",
        contrast: "#fff",
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      text: {
        primary: "rgba(255, 255, 255, 0.77)",
        secondary: "rgba(255, 255, 255, 0.54)",
        disabled: "rgba(255, 255, 255, 0.38)",
        hint: "rgba(255, 255, 255, 0.38)",
      },
      donut: {
        bg: "#383b4c",
      },
      cellBorder: {
        color: "rgba(255, 255, 255, 0.54)",
      },
      background: {
        paper: "#222639",
        default: "#1B1E2E",
      },
    },
  },
}

export default appThemeOptions

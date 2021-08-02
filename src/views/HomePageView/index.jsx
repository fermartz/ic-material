import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

import logo from "../../assets/logo.svg"

function HomePageView() {
  return (
    <Box
      margin="6rem 0 0 0"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <img
        src={logo}
        style={{ height: "20vmin", display: "block", margin: "2rem 0 2rem 0" }}
        alt="logo"
      />
      <Typography variant="h4" gutterBottom>
        Hello Internet Computer + Vite + React + Material UI
      </Typography>
      <Typography variant="h6" gutterBottom>
        Includes dark theme + 3 ICP examples 🚀🚀🚀
      </Typography>
    </Box>
  )
}

export default HomePageView

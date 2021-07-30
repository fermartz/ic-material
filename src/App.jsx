import React from "react";
import { Router } from "react-router-dom";
import routes, { renderRoutes } from "./routes";
import { createBrowserHistory } from "history";
import CssBaseline from '@material-ui/core/CssBaseline'

const history = createBrowserHistory();

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router history={history}>{renderRoutes(routes)}</Router>
    </React.Fragment> 
  );
}

export default App;

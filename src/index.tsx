import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { featuresStore } from './features/featuresStore';
import {
  Container,
  createTheme, 
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { 
  Shared,
} from "./features/Shared";
import {theme} from "./features/GPXReact/utils/theme";
import {GPXReact} from "./features/GPXReact";

console.warn(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION} ${process.env.REACT_APP_ENV}`);

export const getFeaturesStore = () => { return featuresStore }

const root = ReactDOM.createRoot(
  document.getElementById('gpx-react') as HTMLElement
)

root.render(
  <React.Fragment>
    <Router>
      <Provider store={ featuresStore }>
        <ThemeProvider theme={createTheme(theme())}>
          <CssBaseline />
          <Container maxWidth="md">
            <Shared />
              <Switch>
                <Route 
                  path="**" 
                  render={({ history }) => <GPXReact /> } />
              </Switch>
          </Container>
        </ThemeProvider>
      </Provider>
      </Router>
  </React.Fragment>
)


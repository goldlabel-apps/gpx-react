import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { featuresStore } from './features/featuresStore';
import { 
  Grid,
  Container,
  createTheme, 
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { 
  Shared,
  TopMenu,
  theme,
} from "./features/Shared";

console.warn(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`);

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
          <Container>
            <TopMenu />
            <Shared />
            <Grid container>
              <Switch>
                <Route exact path="/"
                  render={({ history }) => (
                    <React.Fragment>
                      GPX                    
                    </React.Fragment>
                  )} />
              </Switch>
            </Grid>
          </Container>
        </ThemeProvider>
      </Provider>
      </Router>
  </React.Fragment>
)


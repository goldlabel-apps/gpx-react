# GPX React

> View, Edit & Share Geodata using React & Material UI

This is a React Progressive Web App. It uses data created using a Garmin Decent Dive computer/watch. You can create compatable data (.gpx) with pretty much any smart device for free. Upload and make it more fun here.

```html
<noscript>You'll need a Lot more JavaScript to run this</noscript>
  <div id="gpx-react" />
```

Some features of the app are available free on GitHub public repositories. Some are not.
eg: [index.tsx](https://github.com/listingslab-software/gpx-react/blob/master/src/index.tsx)

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Route, 
  Switch, 
  BrowserRouter as Router 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { featuresStore } from './features/featuresStore';
import { 
  Grid, Container, createTheme, 
  ThemeProvider, CssBaseline,
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
...
```

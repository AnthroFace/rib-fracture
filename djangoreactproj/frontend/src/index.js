import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//import reportWebVitals from './reportWebVitals';
//import { createMuiTheme } from '@material-ui/core';
//import { ThemeProvider } from '@material-ui/core';

//color theme 
/*
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffc570',
      main: '#ffb74d',
      dark: '#b28035',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#43464b',
      dark: '#000000',
      contrastText: '#000',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
  );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

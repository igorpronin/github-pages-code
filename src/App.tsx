import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import TextCounter from './components/TextCounter/TextCounter';
import {createTheme, ThemeProvider} from '@material-ui/core';

const theme = createTheme({
  overrides: {
    MuiInputBase: {
      input: {
        width: 400
      }
    }
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">Services</header>
          <nav className="Nav">
            <NavLink className="App-link" to="/textcounter" >Text Counter</NavLink>
          </nav>
          <Switch>
            <Route path="/textcounter">
              <TextCounter />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

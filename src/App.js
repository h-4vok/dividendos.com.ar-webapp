import React, { PureComponent } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import * as Pages from './components/pages';
import './App.scss';
import { UnprotectedRoute, NoMatchRoute } from './components/molecules';
import { GlobalState } from './lib/GlobalState';

const buildTheme = () =>
  createMuiTheme({
    typography: {
      fontSize: 16
    }
  });

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      appTheme: buildTheme()
    };

    GlobalState.AppComponent = this;
  }

  render() {
    const { appTheme } = this.state;

    return (
      <Router>
        <div>
          <CssBaseline />
          <ThemeProvider theme={appTheme}>
            <Switch>
              <UnprotectedRoute exact path="/" component={Pages.DefaultPage} />

              <Route component={NoMatchRoute} />
            </Switch>
          </ThemeProvider>
        </div>
      </Router>
    );
  }
}

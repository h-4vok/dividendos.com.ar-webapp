import React, { PureComponent } from 'react';
import { withSnackbar } from 'notistack';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Button } from '@material-ui/core';
import { RouteLink } from '../atoms';
import './ApplicationBar.styles.scss';
import { SnackbarVisitor } from '../../lib/SnackbarVisitor';
import { API } from '../../lib/xhr';

class ApplicationBarComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.notifier = new SnackbarVisitor(props);
    this.api = new API(this.notifier);
  }

  render() {
    return (
      <div className="application-bar">
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className="application-bar-title">
              <Button size="large">
                <RouteLink link="">DIVIDENDOS</RouteLink>
              </Button>
            </Typography>

            <Button>
              <RouteLink link="option1">Opcion Menu 1</RouteLink>
            </Button>
            <Button>
              <RouteLink link="option2">Opcion Menu 2</RouteLink>
            </Button>
            <Button>
              <RouteLink link="option3">Opcion Menu 3</RouteLink>
            </Button>

            <Button variant="outlined">
              <RouteLink link="sign-in">Ingresar</RouteLink>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export const ApplicationBar = withSnackbar(ApplicationBarComponent);

// @flow
import React from 'react';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './index.css';

const Root = () => (
  <div className="app-wrapper">
    <AppBar position="static">
      <div className="container">
        <Toolbar className="toolbar">
          <Typography type="title" color="inherit" className="app-title">
            Shopper
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </div>
    </AppBar>
  </div>
);

export default Root;

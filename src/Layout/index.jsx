import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './components/Navigation';
import Content from './components/Content';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navigation />

      <Content>{children}</Content>
    </div>
  );
}

export default Layout;

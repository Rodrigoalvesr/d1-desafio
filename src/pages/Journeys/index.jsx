import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import NewJourney from './components/NewJourney';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    paddingTop: 30,
  },
});

function Journeys() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <NewJourney />

      <div className={classes.container}>
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default Journeys;

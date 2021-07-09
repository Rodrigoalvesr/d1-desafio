import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Company from './Company';
import Form from './Form';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    padding: '0 90px',
  },
});

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Company />
      <Form />
    </header>
  );
}

export default Header;

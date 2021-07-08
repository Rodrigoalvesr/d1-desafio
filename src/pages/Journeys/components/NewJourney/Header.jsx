import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottom: '1px solid #E4E6F1',
  },
  title: {
    color: '#9196AB',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Nova Jornada</Typography>
    </div>
  );
}

export default Header;

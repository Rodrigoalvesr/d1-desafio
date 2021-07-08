import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '@/assets/images/logotipo.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 35,
    marginBottom: 35,
  },
});

function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a href="https://www.d1.cx/">
        <img alt="D1" src={logo} height={22} />
      </a>
    </div>
  );
}

export default Logo;

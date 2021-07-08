import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function Content({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

export default Content;

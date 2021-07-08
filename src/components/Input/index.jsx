import React from 'react';
import PropType from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    border: '1px solid #CCCFDE',
    padding: 6,
    borderRadius: 5,
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    '& svg': {
      fill: theme.palette.primary.main,
    },
  },
  input: {
    fontSize: 12,
    '&::placeholder': {
      color: '#9196AB',
    },
  },
}));

function Input({ startIcon, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {startIcon && <div className={classes.icon}>{startIcon}</div>}
      <InputBase
        fullWidth
        className={classnames(classes.input, className)}
        {...rest}
      />
    </div>
  );
}

Input.propTypes = {
  startIcon: PropType.node,
  className: PropType.string,
};

export default Input;

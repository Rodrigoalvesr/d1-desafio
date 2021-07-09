import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
    background: '#E4E6F1',
    border: '1px solid #EBEEF6',
    borderRadius: '50%',
    '&.selected': {
      color: '#FFFFFF',
      background: theme.palette.primary.main,
    },
  },
  text: {
    color: '#9196AB',
    fontSize: 10,
    fontWeight: 'bold',
    '&.selected': {
      color: '#FFFFFF',
    },
  },
}));

function Badge({ selected, value, className }) {
  const classes = useStyles();

  return (
    <div className={classnames(classes.root, className, { selected })}>
      <Typography className={classnames(classes.text, { selected })}>
        {value}
      </Typography>
    </div>
  );
}

Badge.defaultProps = {
  selected: false,
};

Badge.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selected: PropTypes.bool,
  className: PropTypes.string,
};

export default Badge;

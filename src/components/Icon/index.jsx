import React from 'react';
import PropTypes from 'prop-types';
import icons from './list';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    fill: ({ color }) => color,
  },
}));

function Icon({ name, color, className, ...rest }) {
  const classes = useStyles({ color });
  const CustomIcon = icons[name];

  return (
    <CustomIcon className={classnames(classes.root, className)} {...rest} />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icon;

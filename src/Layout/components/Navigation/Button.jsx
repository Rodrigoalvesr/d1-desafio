import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@Components/Tooltip';
import Icon from '@Components/Icon';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    width: 21,
    padding: '24px 0',
    '&.selected': {
      borderWidth: '0 0 1px 0',
      borderStyle: 'solid',
      borderImage: 'linear-gradient(90deg, #00E1FF 0%, #117EFF 100%) 1',
      boxSizing: 'border-box',
    },
  },
  icon: {
    cursor: 'pointer',
    fill: '#E4E6F1',
    '&:hover': {
      fill: theme.palette.primary.main,
    },
  },
}));

function Button({ name, icon, selected }) {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <div className={classnames(classes.content, { selected })}>
        <Tooltip title={name} placement="right" arrow>
          <div>
            <Icon name={icon} className={classes.icon} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

Button.defaultProps = {
  selected: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default Button;

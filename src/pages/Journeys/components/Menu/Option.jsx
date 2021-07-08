import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Icon from '@Components/Icon';
import Badge from '@Components/Badge';
import getStatus from '@/common/getStatus';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    userSelect: 'none',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    cursor: 'pointer',
    '&:hover': {
      '& $name': {
        color: theme.palette.primary.main,
      },
      '& $badge:not(.selected)': {
        background: '#EBEEF6',
      },
    },
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  badge: {},
  name: {
    fontSize: 13,
    '&.selected': {
      fontWeight: 'bold',
      color: '#117EFF',
    },
  },
}));

function Option({ id, name, quantity, selected, onClick }) {
  const classes = useStyles();
  const status = React.useMemo(() => getStatus(id), [id]);

  return (
    <div className={classes.root}>
      <Icon className={classes.icon} name={status.icon} color={status.color} />

      <div className={classes.content} onClick={onClick}>
        <Typography className={classnames(classes.name, { selected })}>
          {name}
        </Typography>

        <Badge selected={selected} value={quantity} className={classes.badge} />
      </div>
    </div>
  );
}

Option.defaultProps = {
  selected: false,
};

Option.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

export default Option;

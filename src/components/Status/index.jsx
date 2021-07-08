import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Icon from '@Components/Icon';
import { makeStyles } from '@material-ui/core/styles';
import getStatus from '@/common/getStatus';
import classnames from 'classnames';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  name: {
    fontSize: 13,
  },
});

function Status({ id }) {
  const classes = useStyles();
  const status = React.useMemo(() => getStatus(id), [id]);

  return (
    <div className={classes.root}>
      <Icon className={classes.icon} name={status.icon} color={status.color} />
      <Typography className={classnames(classes.name)}>
        {status.name}
      </Typography>
    </div>
  );
}

Status.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Status;

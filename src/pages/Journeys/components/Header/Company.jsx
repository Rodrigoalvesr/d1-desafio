import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@Components/Tooltip';
import companyLogo from '@/assets/images/acme-logo.png';
import { withStyles } from '@material-ui/core/styles';

const DarkTooltip = withStyles({
  tooltip: {
    color: '#FFFFFF',
    backgroundColor: '#3E4157',
  },
  arrow: {
    color: '#3E4157',
  },
})(Tooltip);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    fontSize: 14,
    fontWeight: 'bold',
    background: theme.palette.primary.main,
  },
  avatarContent: {
    marginRight: 15,
  },
  companyContent: {
    display: 'flex',
    alignItems: 'center',
    height: 30,
    padding: '0 13px',
    border: '1px solid #EBEEF6',
    borderRadius: 5,
    background: '#FFFFFF',
  },
}));

function Company() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.avatarContent}>
        <DarkTooltip title="Antônio da Silva" placement="right" arrow>
          <Avatar className={classes.avatar}>A</Avatar>
        </DarkTooltip>
      </div>
      <div className={classes.companyContent}>
        <img alt="acme" src={companyLogo} height={26} />
      </div>
    </div>
  );
}

export default Company;

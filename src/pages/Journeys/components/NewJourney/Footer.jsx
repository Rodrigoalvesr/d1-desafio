import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function Footer({ handleCloseModal }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button color="primary" onClick={handleCloseModal}>
        Continuar
      </Button>
      <Button onClick={handleCloseModal}>Cancelar</Button>
    </div>
  );
}

Footer.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default Footer;

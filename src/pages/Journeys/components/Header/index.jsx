import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Company from './Company';
import { useDispatch } from 'react-redux';
import Form from './Form';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    padding: '0 90px',
  },
});

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpenModal = React.useCallback(() => {
    dispatch({ type: 'JOURNEY_OPEN_MODAL' });
  }, [dispatch]);

  return (
    <header className={classes.root}>
      <Company />
      <Form handleOpenModal={handleOpenModal} />
    </header>
  );
}

export default Header;

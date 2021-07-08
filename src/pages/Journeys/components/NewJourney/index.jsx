import React from 'react';
import Modal from '@material-ui/core/Modal';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: 382,
    borderRadius: 7,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #E4E6F1',
    boxShadow: '1px 1px 10px #1A173134',
    padding: 30,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
}));

function NewJourney() {
  const classes = useStyles();
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();
  const { modal } = useSelector((journey) => journey);

  const handleCloseModal = React.useCallback(() => {
    dispatch({ type: 'JOURNEY_CLOSE_MODAL' });
  }, [dispatch]);

  return (
    <Modal open={modal} onClose={handleCloseModal}>
      <div className={classes.root}>
        <Header />
        <Body text={text} setText={setText} />
        <Footer handleCloseModal={handleCloseModal} />
      </div>
    </Modal>
  );
}

export default NewJourney;

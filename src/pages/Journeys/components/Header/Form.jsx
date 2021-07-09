import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@Components/Input';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      marginRight: 15,
    },
  },
  input: {
    width: 230,
  },
});

function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpenModal = React.useCallback(() => {
    dispatch({ type: 'JOURNEY_OPEN_MODAL' });
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Input
        placeholder="Buscar"
        startIcon={<SearchIcon fontSize="small" />}
        className={classes.input}
      />
      <Button
        color="primary"
        variant="contained"
        disableElevation
        startIcon={<AddIcon />}
        onClick={handleOpenModal}
      >
        Nova Jornada
      </Button>
    </div>
  );
}

export default Form;

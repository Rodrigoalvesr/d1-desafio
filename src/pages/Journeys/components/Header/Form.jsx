import React from 'react';
import PropType from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
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

function Form({ handleOpenModal }) {
  const classes = useStyles();

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

Form.propTypes = {
  handleOpenModal: PropType.func.isRequired,
};

export default Form;

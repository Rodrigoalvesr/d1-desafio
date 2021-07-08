import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Input from '@Components/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: 15,
  },
  text: {
    color: '#3E4157',
    fontSize: 13,
  },
  helper: {
    color: '#9196AB',
    fontSize: 13,
  },
});

function Body({ text, setText }) {
  const classes = useStyles();

  const handleChange = React.useCallback(
    (event) => setText(event.target.value),
    [setText]
  );

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        Dê um <strong>nome</strong> para essa Jornada
      </Typography>
      <Input value={text} onChange={handleChange} className={classes.input} />
      <Typography className={classes.helper}>
        Você poderá alterar essa informação depois.
      </Typography>
    </div>
  );
}

Body.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};

export default Body;

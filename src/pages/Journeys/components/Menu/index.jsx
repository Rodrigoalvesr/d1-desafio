import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Option from './Option';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import api from '@/services/api';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 90,
    width: 190,
  },
  title: {
    color: '#3E4157',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 30,
  },
});

function Journeys() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { filter } = useSelector((journey) => journey);

  const { data = [] } = useQuery('filter', () =>
    api.get('/filter').then(({ data }) => data)
  );

  const handleChangeFilter = React.useCallback(
    (id) => () => {
      dispatch({
        type: 'JOURNEY_SET_FILTER',
        payload: id,
      });
    },
    [dispatch]
  );

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Jornadas</Typography>
      {data.map((item) => (
        <Option
          key={`filter_${item.id}`}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          selected={item.id === filter}
          onClick={handleChangeFilter(item.id)}
        />
      ))}
    </div>
  );
}

export default Journeys;

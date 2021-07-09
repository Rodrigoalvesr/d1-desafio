import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DataTable from './DataTable';
import { useSelector } from 'react-redux';
import useFetchJourney from './useFetchJourney';

const useStyles = makeStyles({
  root: {
    padding: 54,
  },
});

function Content() {
  const classes = useStyles();
  const { filter } = useSelector((journey) => journey);
  const { isLoading, data = [] } = useFetchJourney(filter);

  return (
    <div className={classes.root}>
      <DataTable data={data} isLoading={isLoading} />
    </div>
  );
}

export default Content;

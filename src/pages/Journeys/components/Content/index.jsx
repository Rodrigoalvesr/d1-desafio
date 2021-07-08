import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DataTable from './DataTable';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import api from '@/services/api';

const useStyles = makeStyles({
  root: {
    padding: 54,
  },
});

function Content() {
  const classes = useStyles();
  const { filter } = useSelector((journey) => journey);

  const { isLoading, data = [] } = useQuery(['journey', filter], () =>
    api.get(`/journey/${filter || ''}`).then(({ data }) => data)
  );

  return (
    <div className={classes.root}>
      <DataTable data={data} isLoading={isLoading} />
    </div>
  );
}

export default Content;

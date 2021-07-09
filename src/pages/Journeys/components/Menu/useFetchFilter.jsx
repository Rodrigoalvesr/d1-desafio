import { useQuery } from 'react-query';
import api from '@/services/api';

function useFetchFilter() {
  return useQuery('filter', () => api.get('/filter').then(({ data }) => data));
}

export default useFetchFilter;

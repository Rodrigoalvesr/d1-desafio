import { useQuery } from 'react-query';
import api from '@/services/api';

function useFetchJourney(filter) {
  return useQuery(['journey', filter], () =>
    api.get(`/journey/${filter || ''}`).then(({ data }) => data)
  );
}

export default useFetchJourney;

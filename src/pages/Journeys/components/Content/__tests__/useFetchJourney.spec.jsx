import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import useFetchJourney from '../useFetchJourney';
import api from '@/services/api';

const queryClient = new QueryClient({});

jest.mock('@/services/api', () => ({
  get: jest.fn(),
}));

const mockGetApi = [
  {
    name: 'Crédito pré-aprovado',
    status: 5,
    recipients: '25.000',
    success: '23%',
    id: '5f2311e88e6b8b24e047de91',
  },
];

describe('useFetchJourney', () => {
  it('teste', async () => {
    api.get.mockResolvedValueOnce({ data: mockGetApi });
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result, waitFor } = renderHook(() => useFetchJourney(), {
      wrapper,
    });
    await waitFor(() => !result.current.isFetching);
    expect(result.current.data).toEqual(mockGetApi);
  });
});

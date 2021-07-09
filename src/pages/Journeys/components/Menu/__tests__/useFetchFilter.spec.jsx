import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import useFetchFilter from '../useFetchFilter';
import api from '@/services/api';

const queryClient = new QueryClient({});

jest.mock('@/services/api', () => ({
  get: jest.fn(),
}));

const mockGetApi = [
  {
    id: 0,
    name: 'Todos',
    quantity: 8,
  },
  {
    id: 1,
    name: 'Em execução',
    quantity: 2,
  },
];

describe('useFetchFilter', () => {
  it('teste', async () => {
    api.get.mockResolvedValueOnce({ data: mockGetApi });
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result, waitFor } = renderHook(() => useFetchFilter(), {
      wrapper,
    });
    await waitFor(() => !result.current.isFetching);
    expect(result.current.data).toEqual(mockGetApi);
  });
});

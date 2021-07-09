import api from '../api';

const apiMock = { name: 'api' };

jest.mock('axios', () => ({
  create: jest.fn(() => apiMock),
}));

describe('API', () => {
  it('Should create the API', () => {
    expect(api).toEqual(apiMock);
  });
});

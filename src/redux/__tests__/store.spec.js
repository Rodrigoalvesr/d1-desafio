import { store } from '../store';

const storeMock = { name: 'store' };

jest.mock('redux', () => ({
  createStore: jest.fn(() => storeMock),
}));

describe('Store', () => {
  it('Should create the store', () => {
    expect(store).toEqual(storeMock);
  });
});

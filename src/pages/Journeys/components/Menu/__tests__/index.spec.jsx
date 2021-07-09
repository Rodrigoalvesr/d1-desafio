import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '../index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import useFetchFilter from '../useFetchFilter';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  filter: 0,
});
jest.mock('../useFetchFilter', () => jest.fn());

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useCallback: (cb) => () => jest.fn(cb()()),
}));

describe('Menu', () => {
  it('Renders correctly', () => {
    useFetchFilter.mockReturnValue({
      data: [
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
      ],
    });
    const component = renderer
      .create(
        <Provider store={store}>
          <Menu />
        </Provider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

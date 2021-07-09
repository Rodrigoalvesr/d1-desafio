import React from 'react';
import renderer from 'react-test-renderer';
import Journey from '../index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

jest.mock('@/services/api', () => ({
  get: () =>
    Promise.resolve({
      data: {
        data: [
          {
            name: 'Crédito pré-aprovado',
            status: 5,
            recipients: '25.000',
            success: '23%',
            id: '5f2311e88e6b8b24e047de91',
          },
        ],
      },
    }),
}));
jest.mock('react-query', () => ({
  useQuery: (params, fn) => fn(),
}));

describe('Journey', () => {
  it('Renders correctly', () => {
    const store = mockStore({
      modal: false,
    });
    const component = renderer
      .create(
        <Provider store={store}>
          <Journey />
        </Provider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

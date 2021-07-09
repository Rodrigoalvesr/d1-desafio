import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Content from '../index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import useFetchJourney from '../useFetchJourney';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  filter: 1,
});
jest.mock('../useFetchJourney', () => jest.fn());

describe('Content', () => {
  it('Renders correctly', async () => {
    useFetchJourney.mockResolvedValue({
      data: [],
    });

    const component = renderer
      .create(
        <Provider store={store}>
          <Content />
        </Provider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

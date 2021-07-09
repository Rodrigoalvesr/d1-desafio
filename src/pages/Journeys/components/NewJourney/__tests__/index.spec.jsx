import React from 'react';
import renderer from 'react-test-renderer';
import NewJourney from '../index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useCallback: (cb) => jest.fn(cb()),
}));

describe('New journey', () => {
  it('Renders correctly', () => {
    const store = mockStore({
      modal: false,
    });
    const spy = jest.spyOn(React, 'useCallback');
    const component = renderer
      .create(
        <Provider store={store}>
          <NewJourney />
        </Provider>
      )
      .toJSON();
    expect(spy).toBeCalled();
    expect(component).toMatchSnapshot();
  });
});

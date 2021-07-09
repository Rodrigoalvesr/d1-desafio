import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

jest.mock('../pages/Journeys', () => jest.fn());
jest.mock('react-redux', () => ({
  Provider: jest.fn(),
}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useCallback: (cb) => jest.fn(cb()),
}));

describe('App', () => {
  it('Renders correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

jest.mock('react-redux', () => ({
  useSelector: () => ({
    filter: 0,
  }),
  useDispatch: () => jest.fn(),
}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useCallback: (cb) => jest.fn(cb()),
}));

describe('Header', () => {
  it('Renders correctly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});

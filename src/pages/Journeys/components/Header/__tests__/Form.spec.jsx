import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

jest.mock('react-redux', () => ({
  useDispatch: () => () => jest.fn(),
}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useCallback: (cb) => jest.fn(cb()),
}));

describe('Form', () => {
  it('Renders correctly', () => {
    const component = shallow(<Form handleOpenModal={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
});

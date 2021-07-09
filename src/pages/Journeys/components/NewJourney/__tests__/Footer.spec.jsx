import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Footer', () => {
  it('Renders correctly', () => {
    const component = shallow(<Footer handleCloseModal={() => jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

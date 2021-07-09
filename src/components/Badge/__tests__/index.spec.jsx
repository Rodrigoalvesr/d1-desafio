import React from 'react';
import renderer from 'react-test-renderer';
import Badge from '../index';

describe('Badge', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Badge value={10} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

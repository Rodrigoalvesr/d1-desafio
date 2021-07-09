import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../index';

describe('Icon', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Icon name="chart" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

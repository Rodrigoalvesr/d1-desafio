import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../index';

describe('Content', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Content />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

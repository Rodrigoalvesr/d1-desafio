import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../index';

describe('Input', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Input />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Renders correctly with icon', () => {
    const component = renderer.create(<Input startIcon={<div />} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

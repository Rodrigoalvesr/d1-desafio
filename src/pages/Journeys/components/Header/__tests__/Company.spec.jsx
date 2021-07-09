import React from 'react';
import renderer from 'react-test-renderer';
import Company from '../Company';

describe('Company', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Company />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

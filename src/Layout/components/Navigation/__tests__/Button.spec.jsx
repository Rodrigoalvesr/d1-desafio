import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(<Button name="Análises" icon="chart" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

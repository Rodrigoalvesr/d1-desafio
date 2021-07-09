import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '../Logo';

describe('Logo', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(<Logo name="Análises" icon="chart" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

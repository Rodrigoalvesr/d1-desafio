import React from 'react';
import renderer from 'react-test-renderer';
import Navigation, { createNav } from '../index';

describe('Navigation', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Navigation />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Should return an object with icon name and selected false', () => {
    const status = createNav('Análises', 'chart');
    const mock = {
      name: 'Análises',
      icon: 'chart',
      selected: false,
    };
    expect(status).toEqual(mock);
  });

  it('Should return an object with icon name and selected true', () => {
    const status = createNav('Análises', 'chart', true);
    const mock = {
      name: 'Análises',
      icon: 'chart',
      selected: true,
    };
    expect(status).toEqual(mock);
  });
});

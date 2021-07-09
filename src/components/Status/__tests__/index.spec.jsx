import React from 'react';
import renderer from 'react-test-renderer';
import Status from '../index';

describe('Status', () => {
  it('Renders correctly', () => {
    const component = renderer.create(<Status id={0} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

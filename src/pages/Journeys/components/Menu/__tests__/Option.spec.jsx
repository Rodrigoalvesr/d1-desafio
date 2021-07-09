import React from 'react';
import renderer from 'react-test-renderer';
import Option from '../Option';

describe('Option', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(
        <Option id={1} name="Em execução" quantity={2} onClick={jest.fn} />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

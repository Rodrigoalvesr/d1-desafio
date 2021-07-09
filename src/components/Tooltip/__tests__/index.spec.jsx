import React from 'react';
import renderer from 'react-test-renderer';
import Tooltip from '../index';

describe('Tooltip', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(
        <Tooltip title="teste">
          <div>teste</div>
        </Tooltip>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../index';

describe('Layout', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(
        <Layout>
          <div>teste</div>
        </Layout>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

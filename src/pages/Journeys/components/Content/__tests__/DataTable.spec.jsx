import React from 'react';
import renderer from 'react-test-renderer';
import DataTable from '../DataTable';

describe('DataTable', () => {
  it('Renders correctly', () => {
    const mockValues = [
      {
        name: 'Crédito pré-aprovado',
        status: 5,
        recipients: '25.000',
        success: '23%',
        id: '5f2311e88e6b8b24e047de91',
      },
    ];
    const component = renderer.create(<DataTable data={mockValues} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Renders correctly loading', () => {
    const mockValues = [];
    const component = renderer
      .create(<DataTable data={mockValues} isLoading />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

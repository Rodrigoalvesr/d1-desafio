import ReactDOM from 'react-dom';
import RenderApp from '../index';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react'),
  render: jest.fn(),
}));

describe('Main', () => {
  it('Renders correctly', () => {
    RenderApp();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});

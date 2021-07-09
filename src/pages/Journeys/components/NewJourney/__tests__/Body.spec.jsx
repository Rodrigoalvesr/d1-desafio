import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Body from '../Body';
import Input from '@Components/Input';

describe('Body', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(<Body text="" setText={jest.fn()} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Should change the input text and call the mock function', () => {
    const mock = jest.fn();
    const event = {
      preventDefault: jest.fn(),
      target: { value: 'new value' },
    };
    const body = shallow(<Body text="" setText={mock} />);
    const input = body.find(Input);
    input.simulate('change', event);
    expect(mock.mock.calls.length).toEqual(1);
    expect(mock).toBeCalledWith('new value');
  });
});

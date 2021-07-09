import reducer from '../journey';

const INITIAL_VALUE_MOCK = {
  filter: 0,
  modal: false,
};

describe('Journey reducer', () => {
  it('Should return the default value', () => {
    const value = reducer(undefined, {});
    expect(value).toEqual(INITIAL_VALUE_MOCK);
  });

  it('Should return the default value reset', () => {
    const value = reducer(undefined, { type: 'JOURNEY_RESET_VALUE' });
    expect(value).toEqual(INITIAL_VALUE_MOCK);
  });

  it('Should return modal true', () => {
    const value = reducer(undefined, { type: 'JOURNEY_OPEN_MODAL' });
    expect(value).toEqual({
      filter: 0,
      modal: true,
    });
  });

  it('Should return modal false', () => {
    const value = reducer(undefined, { type: 'JOURNEY_CLOSE_MODAL' });
    expect(value).toEqual({
      filter: 0,
      modal: false,
    });
  });

  it('Should return filter 42', () => {
    const value = reducer(undefined, {
      type: 'JOURNEY_SET_FILTER',
      payload: 42,
    });
    expect(value).toEqual({
      filter: 42,
      modal: false,
    });
  });
});

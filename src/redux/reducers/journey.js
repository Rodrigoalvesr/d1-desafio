const INITIAL_STATE = {
  filter: 0,
  modal: false,
};

function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case 'JOURNEY_RESET_VALUE':
      return { ...state, ...INITIAL_STATE };
    case 'JOURNEY_OPEN_MODAL':
      return { ...state, ...{ modal: true } };
    case 'JOURNEY_CLOSE_MODAL':
      return { ...state, ...{ modal: false } };
    case 'JOURNEY_SET_FILTER':
      return { ...state, ...{ filter: action.payload } };
    default:
      return state;
  }
}

export default reducer;

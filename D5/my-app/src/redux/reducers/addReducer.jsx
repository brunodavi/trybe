import { ADD } from '../actions/';

const initialState = 0;

const addReducer = (state = initialState, {type}) => {
  switch (type) {
    case ADD:
      return state + 1
    default:
      return state
  }
}

export default addReducer;

const initialState = []
const ADD_JOKE = 'ADD_JOKE';

function jokes(state = initialState, { type, joke }) {
  switch (type) {
    case ADD_JOKE:
      return [...state, joke]
    default:
      return state
  }
}

export default jokes

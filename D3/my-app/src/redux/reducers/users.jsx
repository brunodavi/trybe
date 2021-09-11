const initialState = []

const ADD = 'ADD'

function users(state = initialState, {type, user}) {
  switch (type) {
    case ADD:
      return [...state, user]
    default:
      return state;
  }
}

export default users;

const initialState = []

const USER = 'USER'

function addUser(state = initialState, {type, user}) {
  switch (type) {
    case USER:
      return [...state, user]
    default:
      return state;
  }
}

export default addUser;

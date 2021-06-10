import { SET_USERS, TOGGLE_INTEREST } from "../actions/types";

const initialstate = {
  users: []
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case SET_USERS:
      const users = action.payload
      return {
        ...state,
        users
      }
    case TOGGLE_INTEREST:
      const userId = action.payload.login.uuid
      const updatedUsers = state.users.map(user => {
        if (user.login.uuid === userId) {
          return ({
            ...user,
            interest: !user.interest
          })
        } else {
          return user
        }
      })
      return {
        ...state,
        users: updatedUsers
      }
    default:
      return state;
  }
}
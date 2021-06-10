import { 
  SET_USERS,
  TOGGLE_INTEREST
} from './types'

const API_URL = 'https://randomuser.me/api/?results=20'

export const getUsers = () => dispatch => {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const users = data.results.map(userData => {
        return ({
          ...userData,
          interest: false
        })
      })
      dispatch(setUsers(users))
    })
}

const setUsers = (users) => {
  return ({
    type: SET_USERS,
    payload: users
  })
}

export const toggleInterest = (user) => {
  return ({
    type: TOGGLE_INTEREST,
    payload: user
  })
}
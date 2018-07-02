import {FETCH_USERS} from '../actions'
export default function (state = [], action) {
  /* 
  从action直接链接到这里
  */
  switch (action.type) {
    case FETCH_USERS:
      // return [action.payload.data]
      // return action.payload.data
      // return [action.payload.data,...state] == state.concat(.payload.data)
      return [...action.payload.data, ...state]
    default:
      break;
  }
  return state
}
import { combineReducers } from 'redux'

import users from './reducer_users'

// 可变数据，mapStateToProps，mapDispatchToProps
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return ++state
    case 'DECREMENT':
      return --state
    default:
      return state
  }
}

// 不变数据mapStateToProps
function books() {
  return [
    {id:1,name:'html css js'},
    {id:2,name:'js jquery'},
    {id:3,name:'react vue angular'}
  ]
}

// 组合成一个root
const rootReducers = combineReducers({
  counter,
  books,
  users
})

export default rootReducers
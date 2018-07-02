import axios from 'axios'
import users from '../data/users.json'
export const FETCH_USERS = 'FETCH_USERS'

/* 
 action 异步获取的数据怎么显示到桌面呢
*/
export function fetchUsers(user) {
  /*
  const host = 'http://localhost:3000'
  const url = '/data/users.json'
  const request = axios.get(url)
  */
 const request = users
  return {
    type: FETCH_USERS,
    payload: request
  }
}
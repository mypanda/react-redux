import React, { Component } from 'react';
import {connect} from 'react-redux'
import Async from './Async'
import {fetchUsers} from '../actions/index'
import { bindActionCreators } from 'redux';
class App extends Component {
  componentWillMount(){
    this.props.fetchUsers('panda')
  }
  render() {
    let { counter, books, users,INCREMENT, DECREMENT} = this.props
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={() => INCREMENT()}>INCREMENT</button>
        <button onClick={() => DECREMENT()}>DECREMENT</button>
        <hr />
        <ul>
        {
          books.map(item =>{
            return <li key={item.id}>{item.name}</li>
          })
        }
        </ul>
        <hr />
        <Async />
        <hr />
        <ul>
          {
            users.map(item => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter:state.counter,
    books:state.books,
    users:state.users
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUsers,
    INCREMENT: () => dispatch({ type: "INCREMENT" }),
    DECREMENT: () => dispatch({ type: "DECREMENT" })
  },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux'
class Async extends Component {
  render() {
    return (
      <div>
        <p>async</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    books: state.books
  }
}
function mapDispatchToProps(dispatch) {
  return {
    INCREMENT: () => dispatch({ type: "INCREMENT" }),
    DECREMENT: () => dispatch({ type: "DECREMENT" }),
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Async);
export default Async;

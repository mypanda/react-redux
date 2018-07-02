import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// redux 支持异步
import reduxPromise from 'redux-promise'
import reducer from './reducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)

console.log(createStoreWithMiddleware(reducer))
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

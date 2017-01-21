import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// TODO: Add when we have reducers
// import reducer from './reducers'
import App from './containers/App'

const middleware = [
  thunk,
]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  // TODO: Add when we have reducers
  //  reducer,
  applyMiddleware(...middleware),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

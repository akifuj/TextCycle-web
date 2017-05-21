import { applyMiddleware, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Thunk from 'redux-thunk';
import rootReducer from './reducers/index';

/*
const defaultState = {
  posts,
}
*/

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(Thunk)
)

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

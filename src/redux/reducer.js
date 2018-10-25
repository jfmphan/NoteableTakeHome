import { combineReducers } from 'redux';
import physicians from './reducers/physicians';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  physicians,
  common,
  router: routerReducer
});

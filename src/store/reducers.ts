import { combineReducers } from 'redux';

export default (injectedReducers = {}) => combineReducers({
  ...injectedReducers,
});

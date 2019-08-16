import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// * LIST OF REDUCERS
import auth from './reducer/Auth';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth,

  
});
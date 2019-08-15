import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import createReducer from './CombineReducers'

export const history = createBrowserHistory();

export const configureStore = (initialState={})=>{
  const middlewares = [thunk, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

}

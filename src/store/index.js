import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import initialState from './initialState';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const initStore = (state = initialState) => createStore(
  reducers,
  state,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default initStore();

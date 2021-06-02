/* import { createStore, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//import { fetchData } from './actions'
const store = createStore(rootReducer, applyMiddleware(thunk));
//store.dispatch(fetchData());
export default store; */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rreducer from './reducer/rreducer';
const middlewares = [logger];
const store = createStore(rreducer, applyMiddleware(...middlewares))
export default store;
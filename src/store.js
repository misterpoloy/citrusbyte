import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';

export default function configureStore(initialState = {}) {
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 return createStore(rootReducer, /* preloadedState, */ composeEnhancers(
      applyMiddleware(thunk)
    ));
}
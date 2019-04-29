import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import { createLogger }  from 'redux-logger';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore  (initialState) {
    return createStore( rootReducer, initialState, applyMiddleware(thunk, createLogger(), reduxImmutableStateInvariant()))
}
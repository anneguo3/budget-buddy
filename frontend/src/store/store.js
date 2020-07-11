import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from '../reducers/index';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhancer = applyMiddleware(thunk)

    // return createStore(
    //     combineReducer,
    //     initialState,
    //     enhancer
    // );

    return createStore(
        combineReducer, 
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}
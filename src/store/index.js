import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = (initialState) => {
	return createStoreWithMiddleware(reducer, initialState);	
}

export default store;
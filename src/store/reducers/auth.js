import { USER_SET } from '../actions/auth';

const initialState = {};

const auth = (state = initialState, action = {}) => {
	switch(action.type) {
		case USER_SET:
			return Object.assign({}, initialState, action.payload);	
		default:
			return state;
	}		
}

export default auth;
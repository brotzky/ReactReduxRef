import { FETCH_WEATHER } from '../actions/index';

export default (state = [], action) => {

	switch(action.type) {
		case FETCH_WEATHER:
			// concating the array to avoid mutation of state
			// must always return a new state object
			return [action.payload.data, ...state];
	}
	return state;
}
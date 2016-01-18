 /**
   * Base file for React Reducers
   *
   * Import all reducers into single rootReducer
   * Export rootReducer
   */

import { combineReducers } from 'redux';
// importing single reducer into rootReducer
import WeatherReducer from './reducer-weather';

const rootReducer = combineReducers({
	weather: WeatherReducer
	// exampleName: ExampleReducerName,
	// anotherExampleName: AnotherExampleReducerName,
});

export default rootReducer;
 /**
   * Base file for React Application
   *
   * Import highest level componenet
   * Import Reducers that provide updated State
   * Create Store and Middleware
   * Render component to selected DOM node
   */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers/';

// Combaine Redux promise and Store
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Render application into DOM using react-dom
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>, 
	document.querySelector('.container')
);
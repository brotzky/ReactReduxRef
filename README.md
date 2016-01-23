# ReactReduxRef
This project started from ReduxSimpleStarter: https://github.com/StephenGrider/ReduxSimpleStarter

###Purpose###
This repository is a personal reference for React using Redux. This is my progress following React Redux course https://www.udemy.com/react-redux/ by Stephen Grider. I am aiming to fully grasp Redux and all the concepts it brings along with it - reducers, actions, pure functions, middleware, and a single object for state.

###Getting Started###

Checkout this repo, install depdencies, then start the gulp process with the following:

```
	> git clone https://github.com/brotzky/ReactReduxRef.git
	> cd ReactReduxRef
	> npm install
	> npm start
	go to http://localhost:8080/ 
```

*Note, if this is your first time setting up this repository you will need to create a folder in `/src/` named `private` with a file named `api-key.js` that contains an API key from http://openweathermap.com/

```
	> /src/private/api-key.js
	const API_KEY = "PUT_YOUR_API_KEY_HERE";
	export default API_KEY;
```

###Technology###
This project contains modules for: 
```
react
react-dom
react-redux
redux
redux-promise
babel
axios
lodash
gulp
```


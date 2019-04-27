import { createStore, applyMiddleware, compose } from 'redux';

import courses from './reducers/courses';

import thunk from 'redux-thunk';

//data
const defaultState = {
	courses: [],
	authors: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	courses,
	defaultState,
	composeEnhancers(
		applyMiddleware(thunk),
	),
);
	


if (module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/courses').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;

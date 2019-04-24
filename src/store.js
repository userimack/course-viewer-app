import { createStore } from 'redux';

import courses from './reducers/courses';

//data
const defaultState = {
	courses: []
};

const store = createStore(
	courses,
	defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // To setup redux devtools
);


if (module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/courses').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;

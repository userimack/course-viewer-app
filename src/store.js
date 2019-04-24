import { createStore } from 'redux';

import rootReducer from './reducers/index';

//data
const defaultState = {
	courses: []
};

const store = createStore(
	rootReducer,
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

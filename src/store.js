import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas/saga';

import rootReducer from './reducers/root';


//data
const defaultState = {
	courses: [],
	authors: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	rootReducer,
	defaultState,
	composeEnhancers(
		applyMiddleware(thunk, sagaMiddleware),
	),
);
	
// then run the saga
sagaMiddleware.run(mySaga)

// if (module.hot) {
// 	module.hot.accept('./reducers/', () => {
// 		const nextRootReducer = require('./reducers/index').default;
// 		store.replaceReducer(nextRootReducer);
// 	});
// }

export default store;

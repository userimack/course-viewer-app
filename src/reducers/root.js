import { combineReducers } from 'redux';
// import { routerReducer } from  'react-router-redux';

import courses from './courses';
import authors from './authors';

const rootReducer = combineReducers({courses, authors});


export default rootReducer;

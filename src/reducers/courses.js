import { ADD_COURSES, ADD_AUTHORS } from '../actions/actionCreators';

function addCourse(state = [], action){
	console.log(action, state);
	switch(action.type){
		case ADD_COURSES:
			console.log("Adding courses to the Store");
			return {...state, courses: action.courses}
		case ADD_AUTHORS:
			console.log("Adding authors to the Store");
			return {...state, authors: [...action.authors]}
		default:
			return state
	}
};

export default addCourse;

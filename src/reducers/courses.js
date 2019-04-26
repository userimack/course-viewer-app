import { ADD_COURSE, ADD_MULTIPLE_COURSES } from '../actions/actionCreators';

function addCourse(state = [], action){
	console.log(action, state);
	switch(action.type){
		case ADD_COURSE:
			console.log("Adding new course.");
			return {courses: [...state.courses, {action}]};
		case ADD_MULTIPLE_COURSES:
			console.log("Adding multiple course");
			return {courses: [...action.courses]}
		default:
			return state
	}
};

export default addCourse;

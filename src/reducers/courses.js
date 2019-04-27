import { ADD_COURSE, ADD_MULTIPLE_COURSES, ADD_AUTHORS } from '../actions/actionCreators';

function addCourse(state = [], action){
	console.log(action, state);
	switch(action.type){
		case ADD_COURSE:
			console.log("Adding new course.");
			const newCourse = action.course;
			newCourse.id = state.courses.length + 1;
			newCourse.slug = action.course.title.toLowerCase().split(" ").join("-");
			return {...state, courses: [...state.courses, newCourse]};
		case ADD_MULTIPLE_COURSES:
			console.log("Adding multiple course");
			if (state.courses.length > 0){
				return state
			}
			return {...state, courses: [...state.courses, ...action.courses]}
		case ADD_AUTHORS:
			console.log("Adding authors to the store");
			return {...state, authors: [...action.authors]}
		default:
			return state
	}
};

export default addCourse;

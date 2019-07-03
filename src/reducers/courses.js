import { ADD_COURSES, ADD_COURSE, REMOVE_COURSE, UPDATE_COURSE } from '../actions/constants';

export default function courses(state = [], action){
	console.log(action, state);
	switch(action.type){
		case ADD_COURSES:
			console.log("Adding courses to the Store");
			return [...action.courses]
		case ADD_COURSE:
			console.log("Adding courses to the Store");
			return [...state, action.course]
		case REMOVE_COURSE:
			console.log("Deleting course from the store");
			const deletedIndex = state.findIndex(element => element.id === action.courseId)
			if (deletedIndex === undefined || deletedIndex === -1) {
				console.log("Error: Unable to find the index")
				return state
			}
			let newCourses = state.slice()
			newCourses.splice(deletedIndex, 1)
			return [...newCourses]
		case UPDATE_COURSE:
			console.log("Updating course in the store");
			const index = state.findIndex(course => action.id === course.id);
			if (index === -1)
				return state;
			let newState = state.slice();
			Object.assign(newState[index], action.course)
			// let {title, authorId, category, slug} = action.course
			// newState[index].title = title;
			// newState[index].authorId = authorId;
			// newState[index].category = category;
			// newState[index].slug = slug;
			return newState;
	
		default:
			return state
	}
};
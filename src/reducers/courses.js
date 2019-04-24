function addCourse(state = [], action){
	console.log(action, state);
	switch(action.type){
		case 'ADD_COURSE':
			console.log("Adding new course.",)
			return {courses: [...state.courses, action.courseName]};
		default:
			return state
	}
};

export default addCourse;

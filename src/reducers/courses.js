function addCourse(state = [], action){
	console.log(action, state);
	switch(action.type){
		case 'ADD_COURSE':
			console.log("Adding course.")
			return [...state, action.courseName];
		default:
			return state
	}
	return state;
};

export default addCourse;

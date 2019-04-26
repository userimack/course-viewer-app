import { getCourses } from '../api/courseApi';

export const ADD_COURSE = 'ADD_COURSE';
export const ADD_MULTIPLE_COURSES = 'ADD_MULTIPLE_COURSES';

export function addCourse(courseName){
	return {
		type: ADD_COURSE,
		id: "",
		title: "",
		slug: "",
		authorId: "",
		category: ""
	}
};

export function fetchCourses(){
	return (dispatch, getState) => {
		console.log("fetching courses");
		getCourses().then(res => {
			console.log("in fetch", res)
			dispatch(addMultipleCourses(res));
		});
	}
}

export function addMultipleCourses(data){
	return {
		type: ADD_MULTIPLE_COURSES,
		courses: data
	}
}
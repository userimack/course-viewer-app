import { getCourses, saveCourse, deleteCourse } from '../api/courseApi';
import { getAuthors } from '../api/authorApi';

export const ADD_COURSES = 'ADD_COURSES';
export const ADD_AUTHORS = 'ADD_AUTHORS';

export function addCourse(course){
	return (dispatch, getState) => {
		console.log("Saving course");
		saveCourse(course).then(response => {
			dispatch(fetchCourses());
		});
	}
}

export function fetchCourses(){
	return (dispatch, getState) => {
		console.log("fetching courses");
		getCourses().then(response => {
			dispatch(addCourses(response));
		});
	}
}

export function addCourses(data){
	return {
		type: ADD_COURSES,
		courses: data
	}
}

export function addAuthors(data){
	return {
		type: ADD_AUTHORS,
		authors: data
	}
}

export function fetchAuthors(){
	return (dispatch, getState) => {
		console.log("fetching authors list");
		getAuthors().then(response => {
			dispatch(addAuthors(response));
		})
	}
}


export function deleteRequest(courseId) {
	return (dispatch, getState) => {
		console.log("Deleting course with Id: ", courseId);
		deleteCourse(courseId).then(response => {
			dispatch(fetchCourses());
		});
	};
}
import { getCourses } from '../api/courseApi';
import { getAuthors } from '../api/authorApi';

export const ADD_COURSE = 'ADD_COURSE';
export const ADD_MULTIPLE_COURSES = 'ADD_MULTIPLE_COURSES';
export const ADD_AUTHORS = 'ADD_AUTHORS';

export function addCourse(course){
	return {
		type: ADD_COURSE,
		course
	}
};

export function fetchCourses(){
	return (dispatch, getState) => {
		console.log("fetching courses");
		getCourses().then(response => {
			dispatch(addMultipleCourses(response));
		});
	}
}

export function addMultipleCourses(data){
	return {
		type: ADD_MULTIPLE_COURSES,
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
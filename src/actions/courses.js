// import { getCourses, saveCourse, deleteCourse } from '../api/courseApi';
// import { getAuthors } from '../api/authorApi';

import { ADD_COURSE, ADD_COURSES, REMOVE_COURSE, FETCH_COURSES, UPDATE_COURSE } from './constants';


export const addCourse = (data) => {
	return {
		type: ADD_COURSE, 
		course: data
	}
};

export const addCourses = (data) => {
	return {
		type: ADD_COURSES, 
		courses: data
	}
};

export const removeCourse = (courseId) => {
	return {
		type: REMOVE_COURSE,
		courseId
	}
}

export const fetchCourses = () => {
	return {
		type: FETCH_COURSES
	}
}

export const updateCourseInStore = (data) => {
	return {
		type: UPDATE_COURSE,
		course: data
	}
}

// export function addCourse(course){
// 	return (dispatch, getState) => {
// 		console.log("Saving course");
// 		saveCourse(course).then(response => {
// 			dispatch(fetchCourses());
// 		});
// 	}
// }

// export function fetchCourses(){
// 	return (dispatch, getState) => {
// 		console.log("fetching courses");
// 		getCourses().then(response => {
// 			dispatch(addCourses(response));
// 		});
// 	}
// }



// export function fetchAuthors(){
// 	return (dispatch, getState) => {
// 		console.log("fetching authors list");
// 		getAuthors().then(response => {
// 			dispatch(addAuthors(response));
// 		})
// 	}
// }


// export function deleteRequest(courseId) {
// 	return (dispatch, getState) => {
// 		console.log("Deleting course with Id: ", courseId);
// 		deleteCourse(courseId).then(response => {
// 			dispatch(fetchCourses());
// 		});
// 	};
// }
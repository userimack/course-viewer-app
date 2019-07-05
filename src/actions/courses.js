// import { getCourses, saveCourse, deleteCourse } from '../api/courseApi';
// import { getAuthors } from '../api/authorApi';

import { 
	ADD_COURSE, 
	ADD_COURSES, 
	REMOVE_COURSE, 
	FETCH_COURSES, 
	UPDATE_COURSE, 
	ADD_COURSE_REQUESTED,
	REMOVE_COURSE_REQUESTED,
	UPDATE_COURSE_REQUESTED
} from './constants';


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

export const removeCourse = (id) => {
	return {
		type: REMOVE_COURSE,
		id
	}
}

export const updateCourseInStore = (data) => {
	return {
		type: UPDATE_COURSE,
		course: data
	}
}

// action for sagas

export const fetchCourses = () => {
	return {
		type: FETCH_COURSES
	}
}

export const addCourseRequested = (course) => {
	return {
		type: ADD_COURSE_REQUESTED,
		course
	}
}

export const removeCourseRequested = (id) => {
	return {
		type: REMOVE_COURSE_REQUESTED,
		id
	}
}

export const updateCourseRequested = (course) => {
	return {
		type: UPDATE_COURSE_REQUESTED,
		course
	}
}
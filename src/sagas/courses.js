import { call, put, takeEvery } from 'redux-saga/effects';

import { getCourses, saveCourse, deleteCourse } from '../api/courseApi';

import { addCourse, addCourses, removeCourse, updateCourseInStore } from '../actions';
import { ADD_COURSE_REQUESTED, FETCH_COURSES, REMOVE_COURSE_REQUESTED, UPDATE_COURSE_REQUESTED } from '../actions/constants';

function* fetchCourses(action) {
    const courses = yield call(getCourses)
    console.log(courses)
    yield put(addCourses(courses))
}

function* addOneCourse(action) {
    // const data ={
    //     title: action.title,
    //     authorId: action.authorId,
    //     category: action.category
    // };
    const course = yield call(saveCourse, action.course);
    yield put(addCourse(course));
}

function* removeACourse(action) {
    yield call(deleteCourse, action.courseId)
    yield put(removeCourse(action.courseId))
}

function* updateCourse(action) {
    // const data = {
    //     id: action.id,
    //     title: action.title,
    //     authorId: action.authorId,
    //     category: action.category,
    //     slug: action.slug
    // }
    const course = yield call(saveCourse, action.course)
    yield put(updateCourseInStore(course))
}


function* courseSaga() {
    yield takeEvery(FETCH_COURSES, fetchCourses);
    yield takeEvery(ADD_COURSE_REQUESTED, addOneCourse);
    yield takeEvery(UPDATE_COURSE_REQUESTED, updateCourse);
    yield takeEvery(REMOVE_COURSE_REQUESTED, removeACourse);
}

export default courseSaga
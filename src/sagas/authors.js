import { call, put, takeEvery } from 'redux-saga/effects';

import { getAuthors } from '../api/authorApi';

import { addAuthors } from '../actions';
import { FETCH_AUTHORS } from '../actions/constants';

function* fetchAuthors(action){
    const authors = yield call(getAuthors);
    yield put(addAuthors(authors))
}

function* authorSaga() {
    yield takeEvery(FETCH_AUTHORS, fetchAuthors)
}

export default authorSaga;
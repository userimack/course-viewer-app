import { all } from 'redux-saga/effects';

import courseSaga from './courses';
import authorSaga from './authors';

export default function* rootSaga() {
    yield all([
        courseSaga(),
        authorSaga()
    ])
}
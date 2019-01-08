// exporte seus sagas aqui

import { all } from 'redux-saga/effects';

export default function* rootSaga(getState) {
    yield all()
}
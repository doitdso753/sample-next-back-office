import { all } from 'redux-saga/effects';
import { boardSaga } from './boardSaga';

export default function* sagaWatcher() {
    yield all([
        boardSaga(),
    ]);
}

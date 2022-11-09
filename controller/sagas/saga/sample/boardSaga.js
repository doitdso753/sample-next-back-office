import {
    takeLatest, put,
} from 'redux-saga/effects';
import axios from 'axios';
import { rootAction } from "../../slice/rootSlice";

const { boardActions } = rootAction;

export function* boardSaga() {
    yield takeLatest(boardActions.getBoardList.type, getBoardList);
    yield takeLatest(boardActions.getBoardDetail.type, getBoardDetail);
    yield takeLatest(boardActions.postBoardOne.type, postBoardOne);
    yield takeLatest(boardActions.putBoardOne.type, putBoardOne);
    yield takeLatest(boardActions.deleteBoardOne.type, deleteBoardOne);
}

/**
 * 게시판 목록
 * @param payload
 * @return {Generator<*, void, *>}
 */
export function* getBoardList({
   // type,
   payload,
}) {
    try {
        const url = '/board';
        const response = yield axios.get(url, payload);

        const {status, data} = response;

        if (status !== 200 || data.code !== 'success') {
            throw Error(data);
        }

        yield put(boardActions.getBoardListSuccess(data.data));
    } catch (e) {
        yield put(boardActions.getBoardListFail(e));
    }
}

/**
 * 게시글 목록
 * @param payload
 * @return {Generator<*, void, *>}
 */
export function* getBoardDetail({
   // type,
   payload,
}) {
    const { id } = payload;

    try {
        const url = `/board/${id}`;
        const response = yield axios.get(url, payload);

        const {status, data} = response;

        if (status !== 200 || data.code !== 'success') {
            throw Error(data);
        }

        yield put(boardActions.getBoardDetailSuccess(data.data));
    } catch (e) {
        yield put(boardActions.getBoardDetailFail(e));
    }
}

/**
 * 게시글 등록
 * @param payload
 * @return {Generator<*, void, *>}
 */
export function* postBoardOne({
   // type,
   payload,
}) {
    try {
        const url = `/board`;
        console.log('헬로~', );
        const response = yield axios.post(url, payload);

        const {status, data} = response;
        console.log('postBoardOne response', response);

        if (status !== 200 || data.code !== 'success') {
            throw Error(data);
        }

        yield put(boardActions.postBoarOneSuccess(data.data));
    } catch (e) {
        console.log(e);
        yield put(boardActions.postBoardOneFail(e));
    }
}

/**
 * 게시글 수정
 * @param payload
 * @return {Generator<*, void, *>}
 */
export function* putBoardOne({
   // type,
   payload,
}) {
    try {
        const { id, title, content } = payload;

        const url = `/board/${id}`;
        const response = yield axios.put(url, {
            title,
            content
        });

        const {status, data} = response;

        if (status !== 200 || data.code !== 'success') {
            throw Error(data);
        }

        yield put(boardActions.putBoarOneSuccess(data.data));
    } catch (e) {
        yield put(boardActions.putBoardOneFail(e));
    }
}

/**
 * 게시글 수정
 * @param payload
 * @return {Generator<*, void, *>}
 */
export function* deleteBoardOne({
   // type,
   payload,
}) {
    try {
        const { id } = payload;

        const url = `/board/${id}`;
        const response = yield axios.delete(url);

        const {status, data} = response;

        if (status !== 200 || data.code !== 'success') {
            throw Error(data);
        }

        yield put(boardActions.deleteBoarOneSuccess(data.data));
    } catch (e) {
        yield put(boardActions.deleteBoardOneFail(e));
    }
}
import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialState = {
  boardList: {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  },
  boardDetail: {
    data: {},
    isLoading: false,
    isSuccess: false,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
    isError: false,
    error: null,
  },
};

// eslint-disable-next-line import/prefer-default-export
export const boardSlice = createSlice({
  name: 'sample/board',
  initialState,
  extraReducers: (builder) => {
    // 로그아웃 시 state 초기화
    builder.addCase(PURGE, () => initialState);
  },
  reducers: {
    /**
     * 게시판 조회
     * */
    getBoardList: (state) => ({
      ...state,
      boardList: {
        ...state.boardList,
        data: [],
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: null,
      },
    }),
    getBoardListSuccess: (state, { payload }) => ({
      ...state,
      boardList: {
        data: payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: null,
      },
    }),
    getBoardListFail: (state, payload) => ({
      ...state,
      boardList: {
        data: [],
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: payload,
      },
    }),
    /**
     * 게시글 조회
     * */
    getBoardDetail: (state) => ({
      ...state,
      boardDetail: {
        ...state.boardDetail,
        data: {},
        isLoading: true,
        isSuccess: false,
        isCreate: false,
        isUpdate: false,
        isDelete: false,
        isError: false,
        error: null,
      },
    }),
    getBoardDetailSuccess: (state, { payload }) => ({
      ...state,
      boardDetail: {
        data: payload,
        isLoading: false,
        isSuccess: true,
        isCreate: false,
        isUpdate: false,
        isDelete: false,
        isError: false,
        error: null,
      },
    }),
    getBoardDetailFail: (state, payload) => ({
      ...state,
      boardDetail: {
        data: {},
        isLoading: false,
        isSuccess: false,
        isCreate: false,
        isUpdate: false,
        isDelete: false,
        isError: true,
        error: payload,
      },
    }),
    /**
     * 게시글 등록
     * */
    postBoardOne: (state) => ({
      ...state,
      boardDetail: {
        ...state.boardDetail,
        data: {},
        isLoading: true,
        isSuccess: false,
        isCreate: false,
        isUpdate: false,
        isDelete: false,
        isError: false,
        error: null,
      },
    }),
    postBoarOneSuccess: (state, { payload }) => ({
      ...state,
      boardDetail: {
        data: payload,
        isLoading: false,
        isSuccess: false,
        isCreate: true,
        isUpdate: false,
        isDelete: false,
        isError: false,
        error: null,
      },
    }),
    postBoardOneFail: (state, payload) => ({
      ...state,
      boardDetail: {
        data: {},
        isLoading: false,
        isSuccess: false,
        isCreate: false,
        isUpdate: false,
        isDelete: false,
        isError: false,
        error: payload,
      },
    }),
    /**
     * 게시글 수정
     * */
    putBoardOne: (state) => ({
      ...state,
      boardDetail: {
        ...state.boardDetail,
        data: {},
        isLoading: true,
        isSuccess: false,
        isCreate: false,
        isUpdate: false,
        isDelete: false,
        isError: false,
        error: null,
      },
    }),
    putBoarOneSuccess: (state, { payload }) => ({
      ...state,
      boardDetail: {
        data: payload,
        isLoading: false,
        isSuccess: false,
        isCreate: false,
        isUpdate: true,
        isDelete: false,
        isError: false,
        error: null,
      },
    }),
    putBoardOneFail: (state, payload) => ({
      ...state,
      boardDetail: {
        data: {},
        isLoading: false,
        isSuccess: false,
        isCreate: false,
        isUpdate: false,
        isDelete: false,
        isError: false,
        error: payload,
      },
    }),
    /**
     * 게시글 삭제
     * */
    deleteBoardOne: (state) => ({
      ...state,
      boardDetail: {
        ...state.boardDetail,
        data: {},
        isLoading: true,
        isSuccess: false,
        isCreate: false,
        isUpdate: false,
        isDelete: false,
        isError: false,
        error: null,
      },
    }),
    deleteBoarOneSuccess: (state, { payload }) => ({
      ...state,
      boardDetail: {
        data: payload,
        isLoading: false,
        isSuccess: false,
        isCreate: false,
        isUpdate: false,
        isDelete: true,
        isError: false,
        error: null,
      },
    }),
    deleteBoardOneFail: (state, payload) => ({
      ...state,
      boardDetail: {
        data: {},
        isLoading: false,
        isSuccess: false,
        isCreate: false,
        isUpdate: false,
        isDelete: false,
        isError: false,
        error: payload,
      },
    }),
    resetBoardList: (state) => ({
      ...state,
      boardList: initialState.boardList,
    }),
    resetBoardDetail: (state) => ({
      ...state,
      boardDetail: initialState.boardDetail,
    }),
  },
});

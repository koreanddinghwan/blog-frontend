import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = `write/INITIALIZE`;
const CHANGE_FIELD = `write/CHANGE_FIELD`;

export const initialize = createAction(INITIALIZE); //초기화
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
})); //특정 키값 바꾸기

//WRITE API
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] =
  createRequestActionTypes('write/WRITE_POST');

export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));

//사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
  title: '', //key:value
  body: '',
  tags: [],
  post: null,
  postError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState, //initialState를 넣어서 초기화
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, //특정 키값에 대해 변경
    }),
    [WRITE_POST]: (state) => ({
      ...state, //post와 posterror 초기화함.
      post: null,
      postError: null,
    }),
    //포스트 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    //포스트 작성 실패
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

//초기state

export default write;

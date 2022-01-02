import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

//회원인증 API상태
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); //인증 시작

    try {
      const response = yield call(request, action.payload); //인증요청
      console.log('requestsaga', response);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response, //HTTP헤더와 상태코드 담음
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }

    yield put(finishLoading(type)); //인증 종료
  };
}

//API 액션타입 편하게 선언
export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

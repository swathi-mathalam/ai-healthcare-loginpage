import {
  takeLatest,
  put,
  call,
} from "redux-saga/effects";

import * as types from "./authTypes";

import {
  sendOtpService,
  verifyOtpService,
  loginService,
} from "../services/api";

function* sendOtpSaga(action) {
  try {
    yield call(
      sendOtpService,
      action.payload
    );

    yield put({
      type: types.SEND_OTP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type:
        types.SEND_OTP_FAILURE,
      payload: error,
    });
  }
}

function* verifyOtpSaga(
  action
) {
  try {
    yield call(
      verifyOtpService,
      action.payload.otp
    );

    yield put({
      type:
        types.VERIFY_OTP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type:
        types.VERIFY_OTP_FAILURE,
      payload: error,
    });
  }
}

function* loginSaga(action) {
  try {
    yield call(
      loginService,
      action.payload.uniqueId,
      action.payload.password
    );

    yield put({
      type: types.LOGIN_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: types.LOGIN_FAILURE,
      payload: error,
    });
  }
}

export default function* authSaga() {
  yield takeLatest(
    types.SEND_OTP_REQUEST,
    sendOtpSaga
  );

  yield takeLatest(
    types.VERIFY_OTP_REQUEST,
    verifyOtpSaga
  );

  yield takeLatest(
    types.LOGIN_REQUEST,
    loginSaga
  );
}
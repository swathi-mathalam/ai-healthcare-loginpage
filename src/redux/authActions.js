import * as types from "./authTypes";

export const sendOtp = (phone) => ({
  type: types.SEND_OTP_REQUEST,
  payload: phone,
});

export const verifyOtp = (
  phone,
  otp
) => ({
  type: types.VERIFY_OTP_REQUEST,
  payload: { phone, otp },
});

export const loginWithId = (
  uniqueId,
  password
) => ({
  type: types.LOGIN_REQUEST,
  payload: {
    uniqueId,
    password,
  },
});
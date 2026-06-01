import * as types from "./authTypes";

const initialState = {
  loading: false,
  otpSent: false,
  isAuthenticated: false,
  error: null,
};

const authReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.SEND_OTP_REQUEST:
    case types.VERIFY_OTP_REQUEST:
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.SEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        otpSent: true,
      };

    case types.VERIFY_OTP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };

    case types.SEND_OTP_FAILURE:
    case types.VERIFY_OTP_FAILURE:
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
export const initialState = {
  isLoggedIn: false,
  isLoggingIn: false, // 로그인 시도중
  isLoggingOut: false,
  user: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data: data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      console.log("reducer start");
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOG_IN_SUCCESS:
      console.log("로그인 성공");
      return {
        ...state,
        user: { ...action.data, nickname: "김호진" },
        isLoggingIn: false,
        isLoggedIn: true,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        user: action.data,
        isLoggingIn: false,
        isLoggedIn: false,
      };

    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: true,
        user: "",
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        user: "",
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        user: "",
      };

    default:
      return state;
  }
};

export default reducer;

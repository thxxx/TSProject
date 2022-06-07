export const initialState = {
  isLoggedIn: false,
  isLoggingIn: false, // 로그인 시도중
  isLoggingOut: false,
  isSignupLoading: false,
  isSignupDone: false, // 로그인 시도중
  isSignupError: null,
  user: null,
  signUpData: {},
  loginData: {},
};

const dummyUser = (data) => ({
  ...data,
  nickname: "제로초",
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
});

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

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        user: dummyUser(action.data),
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
        isLoggingIn: false,
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

    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSignupLoading: true,
        isSignupDone: false,
        user: "",
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignupLoading: false,
        isSignupDone: true,
        user: "",
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSignupLoading: false,
        isSignupDone: false,
      };
    default:
      return state;
  }
};

export default reducer;

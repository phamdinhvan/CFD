import {
  SHOW_LOGIN,
  LOGIN_ERROR,
  MAKE_LOGIN,
  SET_LOADING,
  HANDLE_COURSE,
  HANDLE_LOGOUT,
} from "../type";

let initialValue = {
  dataUser: JSON.parse(localStorage.getItem("dataUser")) || "",
  popupLogin: false,
  login: JSON.parse(localStorage.getItem("localLogin")) || false,
  loginErr: "",
  loading: false,
};

export default function user(state = initialValue, action) {
  switch (action.type) {
    case SHOW_LOGIN:
      return {
        ...state,
        popupLogin: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginErr: action.payload,
        loading: false,
      };
    case MAKE_LOGIN:
      return {
        ...state,
        dataUser: action.payload,
        login: true,
        loading: false,
        loginErr: "",
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        login: false,
      };
    case HANDLE_COURSE:
      return {
        ...state,
        course: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

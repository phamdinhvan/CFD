import {
  SHOW_LOGIN,
  LOGIN_ERROR,
  MAKE_LOGIN,
  HANDLE_LOGOUT,
  SET_LOADING,
  AUTH_FETCH_LOGIN,
  UPDATE_USER,
  AUTH_FETCH_COURSE,
  AUTH_LOGOUT,
  HANDLE_COURSE,
} from "../type";
export function showLogin(flag) {
  return { type: SHOW_LOGIN, payload: flag };
}

export function loginErr(err) {
  return {
    type: LOGIN_ERROR,
    payload: err,
    loading: false,
  };
}

export function makeLogin(data) {
  return {
    type: MAKE_LOGIN,
    payload: data,
    loading: false,
  };
}

export function makeLogout() {
  return {
    type: AUTH_LOGOUT,
  };
}

export function handleLogout() {
  return {
    type: HANDLE_LOGOUT,
  };
}

export function fetchLogin(form) {
  return {
    type: AUTH_FETCH_LOGIN,
    payload: form,
  };
}

export function fetchCourse() {
  return {
    type: AUTH_FETCH_COURSE,
  };
}

export function handleCourse(data) {
  return {
    type: HANDLE_COURSE,
    payload: data,
  };
}

export function setLoading(flag) {
  return {
    type: SET_LOADING,
    payload: flag,
  };
}

export function updateData(data) {
  return {
    type: UPDATE_USER,
    payload: data,
  };
}

import { call, put } from "redux-saga/effects";
import userApi from "../../api/userApi";
import {
  makeLogin,
  loginErr,
  showLogin,
  handleLogout,
  handleCourse,
  setLoading,
} from "../action/user";

export function* fetchLogin({ payload }) {
  let res = yield call(userApi.login, payload);

  if (res.error) {
    yield put(loginErr(res.error));
  } else {
    yield put(makeLogin(res.data));
    localStorage.setItem("tokenUser", JSON.stringify(res.data.token));
    localStorage.setItem("dataUser", JSON.stringify(res.data));
    localStorage.setItem("localLogin", JSON.stringify(true));
    yield put(showLogin(false));
  }
}
export function* updateData({ payload }) {
  let res = yield call(userApi.updateInfo, payload);
  if (res.error) {
    yield put(loginErr(res.error));
  } else {
    localStorage.setItem("tokenUser", JSON.stringify(res.data.token));
    localStorage.setItem("dataUser", JSON.stringify(res.data));
    localStorage.setItem("localLogin", JSON.stringify(true));
    yield put(makeLogin(res.data));
  }
}

export function* fetchCourse() {
  let res = yield call(userApi.getProfileCourse);
  yield put(handleCourse(res.data));
}
export function* logout() {
  yield localStorage.clear();
  yield put(handleLogout());
}

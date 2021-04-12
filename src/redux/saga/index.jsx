import { takeLatest } from "redux-saga/effects";
import {
  AUTH_FETCH_LOGIN,
  AUTH_LOGOUT,
  UPDATE_USER,
  AUTH_FETCH_COURSE,
} from "../type";
import { fetchLogin, logout, updateData, fetchCourse } from "./sagaUser";

export default function* mySaga() {
  yield takeLatest(AUTH_FETCH_LOGIN, fetchLogin);
  yield takeLatest(AUTH_FETCH_COURSE, fetchCourse);
  yield takeLatest(UPDATE_USER, updateData);
  yield takeLatest(AUTH_LOGOUT, logout);
}

import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { GET_DATA, GET_DATA_FETCH, getUser } from "../actions/user";
import axios from "axios";

function* getmanis(title) {
  yield put({ type: "GET_MANIS", payload: "hai ini dari" });
}

function* getData(fetch) {
  yield put({ type: GET_DATA_FETCH, payload: fetch.payload });
}

export default function* manisSaga() {
  yield takeEvery("GET_MANIS_REQUESt", getmanis);
  yield takeEvery("GET_DATA_REQUEST", getData);
}

import {put, call, takeLatest, takeEvery} from 'redux-saga/effects'
import {GET_DATA, GET_DATA_FETCH, getUser} from '../actions/user'
import axios from 'axios'

 function * getTodos(title) {
     const manis = yield call(getUser)
     yield put ({type: GET_DATA, payload: manis })
}

function * getData(fetch) {
    yield put({type: GET_DATA_FETCH, payload: fetch.payload })
}

export default function *  todosSaga() {
    yield takeEvery("GET_TODOS_REQUESTED", getTodos)
    yield takeEvery('GET_DATA_REQUEST', getData)
} 
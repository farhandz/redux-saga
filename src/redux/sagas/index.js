import { spawn } from "redux-saga/effects"
import todosSaga from "./todos-saga"
import manisSaga from "./manis-saga"

export default function * rootSaga () {
    console.log("Hello From Redux-Saga")
    yield spawn(todosSaga)
    yield spawn(manisSaga)
} 
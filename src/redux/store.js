import {createStore, applyMiddleware}  from 'redux'
import RootReducer from './reducer/index'
import RootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(RootSaga)


export default store
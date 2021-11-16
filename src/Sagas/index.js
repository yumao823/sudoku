import { all, call, put, takeLatest } from 'redux-saga/effects' 
import { getRecords } from '../Services/api'

function* fetchUser(action) {
  try {
    const response = yield call(getRecords, action.payload.isbnNum)
    yield put({type: "USER_FETCH_SUCCESS", response})
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", message: e.message})
  }
}

export function* fetchuserSaga() {
 yield takeLatest("USER_FETCH_REQUEST", fetchUser)
}

export default function* rootSaga() {
  yield all([fetchuserSaga()])
}
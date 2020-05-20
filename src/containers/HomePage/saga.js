import { put, takeEvery, all } from 'redux-saga/effects'
import { TEST_PUT_EFFECT, PUT_EFFECT_MESSAGE } from './constants';

function* helloSaga() {
  yield console.log('Hello Sagas!')
}

export function* testPutEfect() {
  yield console.log('Put effect have just called!');
  yield put({type: PUT_EFFECT_MESSAGE, message: "puted message!"});
}

export function* testPutEffectWatcher() {
  yield takeEvery(TEST_PUT_EFFECT, testPutEfect);
}

export default function* homeSaga() {
  yield all([
    helloSaga(),
    testPutEffectWatcher()
  ])
}
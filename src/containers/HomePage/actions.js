import { TEST_PUT_EFFECT, PUT_EFFECT_MESSAGE } from './constants';

export function actionTest() {
  return {
    type: TEST_PUT_EFFECT
  }
}

export function actionTestSendMessage(message) {
  return {
    type: PUT_EFFECT_MESSAGE,
    message
  }
}
import { all } from 'redux-saga/effects'
import { questionsLinks } from './sagaQuestions'

export default function* rootSaga() {
  yield all([...questionsLinks])
}

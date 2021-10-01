import { call, put, takeEvery } from 'redux-saga/effects'

import { api } from '@/services/api'
import QuestionsActions, { QuestionsType } from '@/store/ducks/questions'

export function* getQuestions({
  params = { difficulty: 'hard' },
  resolve,
  reject,
}) {
  try {
    const {
      data: { results },
    } = yield call(api.get, '/api.php', {
      params: { ...params, amount: 10, type: 'boolean' },
    })

    yield put(QuestionsActions.setQuestions(results))
    yield call(resolve, results)
  } catch (e) {
    yield put(QuestionsActions.setQuestionsError(e.message))
    yield call(reject, e.message)
  }
}

export const questionsLinks = [
  takeEvery(QuestionsType.GET_QUESTIONS, getQuestions),
]

import { createReducer, createActions } from 'reduxsauce'

/* Initial State */
export const INITIAL_STATE = {
  questions: null,
  answeredQuestions: [],
  currentQuestionNumber: 0,
  error: null,
}

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  getQuestions: ['params', 'resolve', 'reject'],
  setQuestions: ['questions'],
  setCurrentQuestionNumber: ['currentQuestionNumber'],
  incrementQuestionNumber: [],
  pushAnsweredQuestion: ['question'],
  resetAnsweredQuestion: [],
  setQuestionsError: ['error'],
})

export const QuestionsType = Types
export default Creators

/* Methods */
export const setQuestions = (state = INITIAL_STATE, { questions }) => ({
  ...state,
  questions,
})

export const setQuestionsError = (state = INITIAL_STATE, { error }) => ({
  ...state,
  error,
})

export const pushAnsweredQuestion = (state = INITIAL_STATE, { question }) => ({
  ...state,
  answeredQuestions: [...state.answeredQuestions, question],
})

export const resetAnsweredQuestion = (state = INITIAL_STATE) => ({
  ...state,
  answeredQuestions: [],
  currentQuestionNumber: 0,
})

export const incrementQuestionNumber = (state = INITIAL_STATE) => ({
  ...state,
  currentQuestionNumber: state.currentQuestionNumber + 1,
})

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_QUESTIONS]: setQuestions,
  [Types.SET_QUESTIONS_ERROR]: setQuestionsError,
  [Types.PUSH_ANSWERED_QUESTION]: pushAnsweredQuestion,
  [Types.RESET_ANSWERED_QUESTION]: resetAnsweredQuestion,
  [Types.INCREMENT_QUESTION_NUMBER]: incrementQuestionNumber,
})

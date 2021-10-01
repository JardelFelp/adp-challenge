export const selectTotalScoreQuantity = ({ questions }) =>
  questions.answeredQuestions.filter(item => !!item.correct).length

export const selectTotalQuestionsQuantity = ({ questions }) =>
  questions.questions.length

export const selectAnsweredQuestions = ({ questions }) =>
  questions.answeredQuestions

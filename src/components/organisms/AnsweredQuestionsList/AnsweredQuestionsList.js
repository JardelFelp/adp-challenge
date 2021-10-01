import React from 'react'
import PropTypes from 'prop-types'

import QuestionCard from '@/components/molecules/QuestionCard'

const AnsweredQuestionsList = ({ questions }) => (
  <>
    {questions.map((question, index) => (
      <QuestionCard key={index} question={question} />
    ))}
  </>
)

AnsweredQuestionsList.propTypes = {
  questions: PropTypes.array.isRequired,
}

AnsweredQuestionsList.defaultProps = {
  questions: [],
}

export default AnsweredQuestionsList

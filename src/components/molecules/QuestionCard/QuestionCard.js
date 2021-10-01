import React from 'react'
import PropTypes from 'prop-types'
import { decode } from 'html-entities'

import RedCircle from '@/assets/icons/red-circle.svg'
import GreenCircle from '@/assets/icons/green-circle.svg'

import { CardWrapper, CardText } from './styles'

const QuestionCard = ({ question }) => (
  <CardWrapper>
    {question.correct ? <GreenCircle /> : <RedCircle />}
    <CardText>{decode(question?.question)}</CardText>
  </CardWrapper>
)

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
}

QuestionCard.defaultProps = {
  question: {},
}

export default QuestionCard

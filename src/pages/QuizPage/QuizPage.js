import React, { useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import { decode } from 'html-entities'
import { bindActionCreators } from 'redux'

import QuestionsCreator from '@/store/ducks/questions'

import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import CircleCard from '@/components/atoms/CircleCard'
import TriangleCard from '@/components/atoms/TriangleCard'
import { applySystemBackground } from '@/components/templates/SystemBackground'

import {
  Container,
  ButtonWrapper,
  Title,
  Pharagraph,
  CounterText,
} from './styles'
import { colors } from '@/styles/colors'

const QuizPage = ({
  navigation,
  questions,
  currentQuestionNumber,
  incrementQuestionNumber,
  pushAnsweredQuestion,
}) => {
  const currentQuestion = useMemo(
    () => (questions?.length ? questions[currentQuestionNumber] : null),
    [questions, currentQuestionNumber],
  )

  const answerQuestion = useCallback(
    answer => {
      // Increment answered questions list
      pushAnsweredQuestion({
        ...currentQuestion,
        correct: answer === currentQuestion?.correct_answer,
        answer,
      })

      // Increment current question
      if (currentQuestionNumber < questions.length - 1) {
        return incrementQuestionNumber()
      }
      // Send to resume page
      return navigation.navigate('Resume')
    },
    [
      currentQuestion,
      currentQuestionNumber,
      incrementQuestionNumber,
      pushAnsweredQuestion,
      questions,
    ],
  )

  return (
    <Container>
      <CircleCard>
        <CounterText>
          {currentQuestionNumber + 1} of {questions?.length}
        </CounterText>
      </CircleCard>

      <TriangleCard>
        <Title>{currentQuestion?.category}</Title>
      </TriangleCard>

      <Card>
        <Pharagraph>{decode(currentQuestion?.question)}</Pharagraph>
      </Card>

      <ButtonWrapper>
        <Button
          background={colors.error}
          onPress={() => answerQuestion('False')}>
          False
        </Button>
        <Button
          background={colors.success}
          onPress={() => answerQuestion('True')}>
          True
        </Button>
      </ButtonWrapper>
    </Container>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(QuestionsCreator, dispatch)

const mapStateToProps = state => ({
  questions: state.questions.questions,
  answeredQuestions: state.questions.answeredQuestions,
  currentQuestionNumber: state.questions.currentQuestionNumber,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(applySystemBackground(QuizPage, false))

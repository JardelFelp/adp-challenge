import React from 'react'
import { useSelector } from 'react-redux'

import Button from '@/components/atoms/Button/Button'
import TriangleCard from '@/components/atoms/TriangleCard/TriangleCard'
import AnsweredQuestionsList from '@/components/organisms/AnsweredQuestionsList'

import { applySystemBackground } from '@/components/templates/SystemBackground'
import {
  selectAnsweredQuestions,
  selectTotalQuestionsQuantity,
  selectTotalScoreQuantity,
} from '@/store/selectors/questions'

import { Container, Title, ScrollList } from './styles'

const ResumePage = ({ navigation }) => {
  const totalScoreQuantity = useSelector(selectTotalScoreQuantity)
  const totalQuestionsQuantity = useSelector(selectTotalQuestionsQuantity)
  const answeredQuestions = useSelector(selectAnsweredQuestions)

  const doPlayAgain = () => {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <TriangleCard>
        <Title>You scored</Title>
        <Title>
          {totalScoreQuantity}/{totalQuestionsQuantity}
        </Title>
      </TriangleCard>

      <ScrollList>
        <AnsweredQuestionsList questions={answeredQuestions} />
      </ScrollList>

      <Button onPress={doPlayAgain}>Play again</Button>
    </Container>
  )
}

export default applySystemBackground(ResumePage, false)

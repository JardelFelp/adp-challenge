import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@/components/atoms/Button'
import QuestionsCreator from '@/store/ducks/questions'
import { applySystemBackground } from '@/components/templates/SystemBackground'

import { Container, Title, Subtitle } from './styles'

const HomePage = ({ navigation }) => {
  const [loading, setLoading] = useState(false)

  const { getQuestions, resetAnsweredQuestion } = QuestionsCreator
  const dispatch = useDispatch()

  const searchQuestions = async () => {
    setLoading(true)

    doSearchQuestions()
      .then(() => {
        dispatch(resetAnsweredQuestion())
        navigation.navigate('Quiz')
      })
      .finally(() => setLoading(false))
  }

  const doSearchQuestions = () => {
    return new Promise((resolve, reject) =>
      dispatch(getQuestions({ difficulty: 'hard' }, resolve, reject)),
    )
  }

  return (
    <Container>
      <Title>Welcome to the Trivia Challenge!</Title>

      <Subtitle>
        You will be presented with 10 True or False questions.
      </Subtitle>

      <Subtitle>Can you score 100%?</Subtitle>

      <Button onPress={searchQuestions} loading={loading}>
        Begin
      </Button>
    </Container>
  )
}

export default applySystemBackground(HomePage)

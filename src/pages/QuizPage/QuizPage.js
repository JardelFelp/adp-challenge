import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'

import QuestionsCreator from '@/store/ducks/questions'
import { applySystemBackground } from '@/components/templates/SystemBackground'

const QuizPage = ({ questions, answeredQuestions }) => {
  console.log({ questions, answeredQuestions })

  return (
    <View>
      <Text>Olá, tela quiz</Text>
    </View>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(QuestionsCreator, dispatch)

const mapStateToProps = state => ({
  questions: state.questions.questions,
  answeredQuestions: state.questions.answeredQuestions,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(applySystemBackground(QuizPage))

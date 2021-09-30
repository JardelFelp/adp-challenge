import React from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

import { applySystemBackground } from '@/components/templates/SystemBackground'
import QuestionsCreator from '@/store/ducks/questions'

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch()
  const { getQuestions } = QuestionsCreator

  console.log(navigation)

  const searchQuestions = async () => {
    doSearchQuestions().then(() => navigation.navigate('Quiz'))
  }

  const doSearchQuestions = () => {
    return new Promise((resolve, reject) =>
      dispatch(
        getQuestions(
          {
            amount: 10,
            difficulty: 'hard',
            type: 'boolean',
          },
          resolve,
          reject,
        ),
      ),
    )
  }

  return (
    <View>
      <TouchableOpacity onPress={searchQuestions}>
        <Text>Let's play :D Oué</Text>
      </TouchableOpacity>
    </View>
  )
}

export default applySystemBackground(HomePage)

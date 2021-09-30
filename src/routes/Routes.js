import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from '@/pages/HomePage'
import QuizPage from '@/pages/QuizPage'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomePage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Quiz"
        component={QuizPage}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes

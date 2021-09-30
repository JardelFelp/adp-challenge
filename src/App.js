import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import store from '@/store'
import Routes from '@/routes'

const App = () => (
  <ReduxProvider store={store}>
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  </ReduxProvider>
)

export default App

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import CloudsImage from '@/assets/background/clouds.png'
import ParkImage from '@/assets/background/park.png'

import {
  BackgroundView,
  ContentView,
  CloudsImageBackground,
  ParkImageBackground,
} from './styles'

export const applySystemBackground = (Component, showClouds = true) => {
  return props => (
    <BackgroundView>
      {/* Background images */}
      {showClouds && <CloudsImageBackground source={CloudsImage} />}
      <ParkImageBackground source={ParkImage} />

      {/* Content */}
      <SafeAreaView>
        <ContentView>
          <Component {...props} />
        </ContentView>
      </SafeAreaView>
    </BackgroundView>
  )
}

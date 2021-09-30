import React from 'react'
import { Dimensions } from 'react-native'

import CloudsSVG from '@/assets/background/clouds.svg'
import ParkSVG from '@/assets/background/park.svg'

import { styles, BackgroundView, ContentView } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export const applySystemBackground = Component => {
  const { width: screenWidth } = Dimensions.get('screen')

  return props => (
    <BackgroundView>
      <CloudsSVG style={styles.clouds} width={screenWidth - 60} />
      <SafeAreaView>
        <ContentView>
          <Component {...props} />
        </ContentView>
      </SafeAreaView>
      <ParkSVG style={styles.park} width={screenWidth} />
    </BackgroundView>
  )
}

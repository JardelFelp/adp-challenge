import styled from 'styled-components'
import { Dimensions } from 'react-native'

import { colors } from '@/styles/colors'

const { width: screenWidth } = Dimensions.get('screen')

export const BackgroundView = styled.View`
  background-color: ${colors.background};
  height: 100%;
`

export const ContentView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 100px;
`

export const CloudsImageBackground = styled.ImageBackground`
  position: absolute;
  top: 40px;
  left: 30px;
  width: ${screenWidth - 60}px;
  height: 100px;
`

export const ParkImageBackground = styled.ImageBackground`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: ${screenWidth}px;
  height: 250px;
`

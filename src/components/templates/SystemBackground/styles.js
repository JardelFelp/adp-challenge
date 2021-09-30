import styled from 'styled-components'
import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'

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

export const styles = StyleSheet.create({
  clouds: {
    position: 'absolute',
    margin: 30,
  },
  park: {
    position: 'absolute',
    bottom: 0,
  },
})

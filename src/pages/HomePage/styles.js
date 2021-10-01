import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import { colors } from '@/styles/colors'

const { width: screenWidth } = Dimensions.get('screen')

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${colors.text};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: ${screenWidth / 2}px;
  margin-bottom: 50px;
`

export const Subtitle = styled.Text`
  color: ${colors.text};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 30px;
  width: ${screenWidth / 1.5}px;
  text-align: center;
`

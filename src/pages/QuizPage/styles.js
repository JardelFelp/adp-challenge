import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('screen')

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10%;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  max-width: ${screenWidth - 120}px;
`

export const CounterText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`

export const Pharagraph = styled.Text`
  text-align: center;
  padding: 25px;
  font-size: 16px;
`

export const ButtonWrapper = styled.View`
  width: ${screenWidth - 60}px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 25px;
`

import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('screen')

export const Container = styled.View`
  width: 100%;
  height: 80%;
  align-items: center;
  margin-top: 5%;
  justify-content: flex-start;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  max-width: ${screenWidth - 120}px;
`

export const ScrollList = styled.ScrollView`
  height: 20%;
  width: ${screenWidth - 60}px;
  margin-bottom: 25px;
`

import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('screen')

export const CardWrapper = styled.View`
  width: ${screenWidth - 60}px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
`

export const CardText = styled.Text`
  font-size: 16px;
  text-align: left;
  width: 80%;
  padding-left: 10px;
`

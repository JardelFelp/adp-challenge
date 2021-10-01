import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('screen')

export const CardWrapper = styled.View`
  width: ${screenWidth - 60}px;
  min-height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`

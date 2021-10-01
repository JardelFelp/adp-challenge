import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('screen')

export const TriangleCardWrapper = styled.View`
  width: ${screenWidth - 60}px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`

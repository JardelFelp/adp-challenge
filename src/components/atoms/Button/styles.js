import { colors } from '@/styles/colors'
import styled from 'styled-components/native'

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${({ background }) => background || colors.primary};
  border-radius: 30px;
  padding: 15px 30px;
  display: flex;
  flex-direction: row;
`

export const ButtonText = styled.Text`
  color: ${({ color }) => color || colors.white};
  font-size: 18px;
  font-weight: 600;
`

export const LoadingIndicator = styled.ActivityIndicator`
  padding-right: 10px;
`

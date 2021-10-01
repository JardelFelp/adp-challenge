import React from 'react'

import TriangleImage from '@/assets/background/triangle.png'

import { TriangleCardWrapper } from './styles'

const TriangleCard = ({ children }) => (
  <TriangleCardWrapper source={TriangleImage} resizeMode="cover">
    {children}
  </TriangleCardWrapper>
)

export default TriangleCard

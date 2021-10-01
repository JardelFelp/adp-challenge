import React from 'react'
import PropTypes from 'prop-types'

import { ButtonWrapper, ButtonText, LoadingIndicator } from './styles'
import { colors } from '@/styles/colors'

const Button = ({ color, background, children, loading, ...props }) => (
  <ButtonWrapper background={background} disabled={loading} {...props}>
    {loading && <LoadingIndicator color={color} />}

    <ButtonText color={color} loading={loading}>
      {children}
    </ButtonText>
  </ButtonWrapper>
)

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  loading: PropTypes.bool,
}

Button.defaultProps = {
  background: colors.primary,
  color: colors.white,
  loading: false,
}

export default Button

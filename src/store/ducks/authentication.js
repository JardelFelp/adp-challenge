import { createReducer, createActions } from 'reduxsauce'

/* Initial State */
export const INITIAL_STATE = {
  token: null,
  user: {},
  authenticationError: null,
}

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  signInRequest: ['email', 'senha'],
  signInSuccess: ['token', 'user'],
  setAuthenticationError: ['authenticationError'],
})

export const AuthenticationType = Types
export default Creators

/* Methods */
signInSuccess = (state = INITIAL_STATE, { token }) => ({
  ...state,
  token,
})

setAuthenticationError = (state = INITIAL_STATE, { authenticationError }) => ({
  ...state,
  authenticationError,
})

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SET_AUTHENTICATION_ERROR]: setAuthenticationError,
})

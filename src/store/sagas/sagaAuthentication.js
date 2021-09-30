import { call, put, takeEvery } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'

import AuthenticationProvider, {
  AuthenticationType,
} from '@/services/providers/authenticationProvider'
import AuthenticationActions from '@/store/ducks/authentication'

import defaultFunction from './sagaDefault'

export function* signIn({ email, senha }) {
  yield defaultFunction(
    function* ({ email, senha }) {
      /* Consome endpoint */

      const { data: response } = yield call(AuthenticationProvider.login, {
        email,
        senha,
      })

      const { token } = response

      // /* Chama callback de sucesso */
      yield put(AuthenticationActions.signInSuccess(token))

      yield NavigationActions.back({})
    },
    { email, senha },
    AuthenticationActions.setAuthenticationError,
  )
}

export const authenticationLinks = [
  takeEvery(AuthenticationType.SIGN_IN_REQUEST, signIn),
]

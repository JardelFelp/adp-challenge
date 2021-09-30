import LoadingActions from '../ducks/loading';
import { put } from 'redux-saga/effects';
import get from 'lodash/get';
import { Alert } from 'react-native';

export default function*(
  requestFunction = () => {},
  params = undefined,
  setErrrorFunction = () => {}
) {
  try {
    /* Inicia Loading */
    yield put(LoadingActions.setLoading(true));

    /* Realiza request */
    yield requestFunction(params);
  } catch (e) {
    /* Pega data do erro */
    const error = get(e, 'response.data.message', e.message);

    /* Chama callback de erro */
    console.log(`Error: ${error}`);
    yield put(setErrrorFunction(error));
  } finally {
    /* Finaliza Loading */
    yield put(LoadingActions.setLoading(false));
  }
}

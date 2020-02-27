import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AuthCreators } from '.';
import api from '../../../services/api';
import { AuthSignInRequestAction, AuthTypes } from './types';

function* signInRequest({ payload }: AuthSignInRequestAction): Generator {
  try {
    const { email, password } = payload;
    const response: any = yield call(api.post, 'session', {
      email,
      password,
    });
    const { token, id, name } = response.data;
    yield put(AuthCreators.signInSuccess(token, { id, name }));
  } catch (er) {
    yield put(AuthCreators.signInFailure());
    toast.error(er.response.data.message, { autoClose: 3000, position: 'top-right' });
  }
  yield;
}

export default [takeLatest(AuthTypes.SIGN_IN_REQUEST, signInRequest)];

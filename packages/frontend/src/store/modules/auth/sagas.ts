import { takeLatest, call } from 'redux-saga/effects';
import { Types } from './duck';
import api from '../../../services/api';

type signInRequestProps = {
  email: string
  password: string
}

function* signInRequest({ email, password }: signInRequestProps): Generator<any> {
  try {
    const response = yield call(api.post, 'session', { email, password });
    console.log(response);
  } catch (er) {
    console.log(er);
  }
  yield;
}


export default [
  takeLatest(Types.SIGN_IN_REQUEST, signInRequest),
];

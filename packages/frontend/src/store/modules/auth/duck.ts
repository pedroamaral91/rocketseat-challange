import { createReducer, createActions } from 'reduxsauce';
import initial, { AuthInitialTypes } from './model';
import { CreatorTypes } from './types';

const clear = (): AuthInitialTypes => ({ ...initial });

const signInSuccess = (state: AuthInitialTypes, { token }: any): AuthInitialTypes => ({
  ...state,
  signed: true,
  token,
});

const signInFailure = (state: AuthInitialTypes): AuthInitialTypes => ({
  ...state,
  loading: false,
});

const { Types, Creators } = createActions({
  authClear: [],
  signInRequest: ['email', 'password'],
  signInSuccess: ['token', 'user'],
  signInFailure: [],
});

export const AuthCreators = Creators as CreatorTypes;
export { Types };

export default createReducer(initial, {
  [Types.AUTH_CLEAR]: clear,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
});

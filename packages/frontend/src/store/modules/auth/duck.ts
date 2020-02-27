import { createReducer, createActions } from 'reduxsauce';
import initial, { AuthInitialTypes } from './model';
import { CreatorTypes } from './types';

const clear = (): AuthInitialTypes => ({ ...initial });
const t = (te: any): AuthInitialTypes => {
  console.log(te);
  return { ...initial };
};

const { Types, Creators } = createActions({
  authClear: [],
  signInRequest: ['email', 'password'],
  teste: ['email', 'password'],
});

export const AuthCreators: CreatorTypes = Creators;
export { Types };

export default createReducer(initial, {
  [Types.AUTH_CLEAR]: clear,
  [Types.TESTE]: t,
});

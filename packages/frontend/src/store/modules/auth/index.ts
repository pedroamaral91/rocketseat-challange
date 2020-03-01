import { default as reducer, AuthCreators as creators } from './duck';
import { default as sagas } from './sagas';
import * as selectors from './selectors';

export const authReducer = reducer;
export const AuthCreators = creators;
export const AuthSagas = sagas;
export const authSelectors = selectors;

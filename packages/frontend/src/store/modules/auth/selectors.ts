import { createSelector } from 'reselect';
import { ApplicationState } from '..';
import { AuthState } from './types';

const authState = (globalState: ApplicationState): AuthState => globalState.authReducer;

export const getIsSigned = createSelector(
  [authState],
  (auth) => auth.signed,
);

export const getIsLoading = createSelector(
  [authState],
  (auth) => auth.loading,
);

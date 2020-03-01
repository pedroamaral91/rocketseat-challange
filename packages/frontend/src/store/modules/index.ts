import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { authReducer, AuthSagas } from './auth';
import { userReducer } from './user';

// reducers
export const rootReducer = combineReducers({ authReducer, userReducer });

export function* rootSaga(): any {
  yield all([...AuthSagas]);
}

// creators and selectors
export { AuthCreators, authSelectors } from './auth';

export type ApplicationState = ReturnType<typeof rootReducer>;

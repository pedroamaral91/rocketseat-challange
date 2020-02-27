import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { AuthCreators, authReducer, AuthSagas } from './auth';
import { userReducer } from './user';

// reducers
export const rootReducer = combineReducers({ authReducer, userReducer });

export function* rootSaga(): any {
  yield all([...AuthSagas]);
}

// creators
export { AuthCreators };

export type ApplicationState = ReturnType<typeof rootReducer>;

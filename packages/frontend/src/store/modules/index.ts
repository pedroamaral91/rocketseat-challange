import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { AuthCreators, authReducer, AuthSagas } from './auth';

// reducers
export const rootReducer = combineReducers({ authReducer });

export function* rootSaga(): any {
  yield all([...AuthSagas]);
}

// creators
export { AuthCreators };

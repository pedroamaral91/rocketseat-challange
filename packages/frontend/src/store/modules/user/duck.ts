import { Reducer } from 'redux';
import { AuthTypes } from '../auth/types';
import { UserState, UserActions } from './types';

const INITIAL_STATE: UserState = {
  id: Number.NaN,
  name: '',
};

const userReducer: Reducer<UserState, UserActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS:
      return { ...state, id: action.payload.user.id, name: action.payload.user.name };
    case AuthTypes.CLEAR:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default userReducer;

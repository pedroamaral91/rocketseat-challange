import { Action } from 'redux';
import { AuthInitialTypes } from './model';

type User = {
  id: number
  name: string
}
export interface CreatorTypes {
  authClear(): AuthInitialTypes
  signInRequest(email: string, password: string): Action
  signInSuccess(token: string, user: User): Action
  signInFailure(): Action
}

export interface TypesInterface {
  AUTH_CLEAR: string
  SIGN_IN_REQUEST: string
}

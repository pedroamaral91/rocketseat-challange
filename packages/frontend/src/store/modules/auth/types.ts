import { AuthInitialTypes } from './model';

export interface CreatorTypes {
  authClear(): AuthInitialTypes
  signInRequest(email: string, password: string): void
  teste(email: string, password: string): void
}

export interface TypesInterface {
  AUTH_CLEAR: string
  SIGN_IN_REQUEST: string
}

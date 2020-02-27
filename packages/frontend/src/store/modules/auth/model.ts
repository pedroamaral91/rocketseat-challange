export type AuthInitialTypes = {
  token: string
  signed: boolean
  loading: boolean
}

const initial: AuthInitialTypes = {
  token: '',
  signed: false,
  loading: false,
};

export default initial;

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducers = persistReducer(
    {
      key: 'fastfeet',
      storage,
      whitelist: ['authReducer'],
    },
    reducers,
  );
  return persistedReducers;
};

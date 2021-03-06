import { createStore, compose, applyMiddleware } from 'redux';

export default function (reducers: any, middlewares: any): any {
  const enhancer = process.env.NODE_ENV === 'development'
    ? compose(
      console.tron.createEnhancer(),
      applyMiddleware(...middlewares),
    )
    : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
}

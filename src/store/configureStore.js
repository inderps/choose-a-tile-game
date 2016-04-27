import { createStore } from 'redux';
import gameSession from '../reducers/gameSession';

export default function configureStore(initialState) {
  const store = createStore(gameSession, initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/gameSession', () => {
      const nextRootReducer = require('../reducers/gameSession');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

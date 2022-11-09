import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; // session storage
// import storage from 'redux-persist/lib/storage'; // local storage
import logger from 'redux-logger';
import history from '../history';
import rootReducer, { rootAction } from './slice/rootSlice';
import rootSaga from './saga/rootSaga';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  blacklist: [
  ],
  // whitelist: [],
  // whitelist, blacklist
};

const sagaMiddleware = createSagaMiddleware({
  context: { history },
});

const middleware = [];

middleware.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const devTools = !!(process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

console.log('여기 시작 : ', middleware);
const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [ // payload serializableCheck 예외 설정
        FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
      ],
      ignoredPaths: [ // redux state 값들 중 serializableCheck 예외 설정할 값의 path
      ],
    },
  }), ...middleware],
});

sagaMiddleware.run(rootSaga);

export default store;

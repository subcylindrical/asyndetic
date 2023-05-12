import { createStore } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedRoot = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedRoot);

export const persistor = persistStore(store);

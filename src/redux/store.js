import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { patientReduser } from './patients/patient-slice';

const persistConfig = {
  key: 'patients',
  storage,
  whitelist: ['id', 'patient', 'patientList'],
};

const persistedReducer = persistReducer(persistConfig, patientReduser);

const store = configureStore({
  reducer: {
    patients: persistedReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);
export { store, persistor };

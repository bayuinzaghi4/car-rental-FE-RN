import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: true,  // Aktifkan Redux DevTools hanya jika dalam mode pengembangan
});

export const persistor = persistStore(store);

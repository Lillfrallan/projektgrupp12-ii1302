import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/es/integration/react'
// import blobReducer from './services/BlobRetrieverAzure'
import blobReducer from './services/BlobRetrieverFireBase'


/**
 * All persist code work like local storage but for redux
 */
const persistConfig = {key:'persist-key',storage }

const persistedReducer = persistReducer(persistConfig, blobReducer)

const store = configureStore({
  reducer: { 
      blobs: persistedReducer, 
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const persistor = persistStore(store)

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);




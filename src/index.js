import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';
import {createStore, applyMiddleware} from 'redux';
import Home from './scenes/home';
import {ReduxNetworkProvider} from 'react-native-offline';
import {createNetworkMiddleware} from 'react-native-offline';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './scenes/loading';

const networkMiddleware = createNetworkMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['network', 'permission'],
  timeout: 0,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(networkMiddleware, thunkMiddleware, logger),
);
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <ReduxNetworkProvider pingInterval={20000}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Home />
        </PersistGate>
      </ReduxNetworkProvider>
    </Provider>
  );
};

export default App;

/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './src/reducers'
import { App } from './App';
import { name as appName } from './app.json';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
)

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)


AppRegistry.registerComponent(appName, () => RNRedux);

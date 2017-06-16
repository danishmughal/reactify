import Expo from 'expo';
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Router from './src/Router';
import reducers from './src/reducers';

class App extends Component {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);

import Expo from 'expo';
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Router from './src/Router';
import reducers from './src/reducers';

class App extends Component {
  // Fix for Redux complaining about changing store on the fly
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);

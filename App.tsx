import React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import App from './src/screens/config/NavigatorConfig'
import store from './src/redux/store';

export default function() {
  return <StoreProvider store={store}>
    <App />
  </StoreProvider>;
}
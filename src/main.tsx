import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './store/store.ts'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

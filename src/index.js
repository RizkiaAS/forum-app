import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './states'
import { ContextProvider } from './context/AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ContextProvider>
    </BrowserRouter>
  </Provider>
)

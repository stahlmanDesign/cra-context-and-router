import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Components/AppContext/context'

import './index.css'
// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root')
)
// registerServiceWorker()

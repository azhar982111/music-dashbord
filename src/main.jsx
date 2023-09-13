import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AllDataContextProvider } from './context/AllDataContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AllDataContextProvider>
      <App />
    </AllDataContextProvider>
  </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './page/LandingPage/LandingPage'
import { GlobalStyle } from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage/>
    <GlobalStyle/>
  </React.StrictMode>,
)

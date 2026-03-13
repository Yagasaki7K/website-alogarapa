import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'

import LoginScreen from './pages/LoginScreen'
import Dashboard from './pages/Dashboard'
import Sobre from './pages/Sobre'
import Termos from './pages/Termos'
import Privacidade from './pages/Privacidade'
import { PwaInstallProvider } from './context/PwaInstallContext'
import { registerServiceWorker } from './utils/registerServiceWorker'

registerServiceWorker()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PwaInstallProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/privacidade" element={<Privacidade />} />
        </Routes>
      </BrowserRouter>
    </PwaInstallProvider>
  </React.StrictMode>
)

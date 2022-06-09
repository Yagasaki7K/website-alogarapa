import React from 'react'
import createRoot from 'react-dom'
import './App.css'

import LoginScreen from './pages/LoginScreen'
import Dashboard from './pages/Dashboard'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './pages/Sobre'

createRoot.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/sobre" element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

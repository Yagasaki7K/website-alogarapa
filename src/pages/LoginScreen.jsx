import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppDetails from '../components/AppDetails'
import AppBackground from '../components/AppBackground'
import Logo from '../images/logo.png'

const App = () => {
    const navigate = useNavigate()

    const toHome = () => {
        navigate('/dashboard')
    }
    return (
        <>
            <AppBackground />
            <AppDetails>
                <ul>
                    <Link to="/"><img src={Logo} alt="AlôGarapa" /></Link>
                    <li><a href="https://kalify.vercel.app">Sobre a Kalify</a></li>
                    <li><a href="https://discord.gg/jhSepmE7nN" target="_blank" rel="noreferrer">Suporte</a></li>
                    <li><Link to="/">Download</Link></li>
                    <button onClick={() => toHome()}>Acessar</button>
                </ul>

                <div className="container">
                    <h1>Encontre uma <span className="love">GARAPA</span> <br /> perto de você!</h1>
                    <button onClick={() => toHome()}>Acessar</button>

                    <div className="links">
                        <Link to="/termos">Termos de Uso</Link> - &nbsp;
                        <Link to="/politicas-de-privacidade">Políticas de Privacidade</Link>
                    </div>
                </div>
            </AppDetails>
        </>
    )
}

export default App
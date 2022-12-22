import React from 'react'
import AppDetails from '../components/AppDetails'
import AppBackground from '../components/AppBackground'
import Logo from '../images/logo.png'

function toHome() {
    window.location.href = "/dashboard"
}

const App = () => {
    return (
        <>
            <AppBackground />
            <AppDetails>
                <ul>
                    <a href="/"><img src={Logo} /></a>
                    <li><a href="/sobre-nos">Sobre a Kalify</a></li>
                    <li><a href="/carreiras">Carreiras</a></li>
                    <li><a href="https://discord.gg/jhSepmE7nN" target="_blank">Suporte</a></li>
                    <li><a href="/">Download</a></li>
                    <button onClick={() => toHome()}>Acessar</button>
                </ul>

                <div className="container">
                    <h1>Encontre uma <span className="love">GARAPA</span> <br /> perto de você!</h1>
                    <button onClick={() => toHome()}>Acessar</button>

                    <div className="links">
                        <a href="/termos">Termos de Uso</a> - &nbsp;
                        <a href="/politicas-de-privacidade">Políticas de Privacidade</a>
                    </div>
                </div>
            </AppDetails>
        </>
    )
}

export default App
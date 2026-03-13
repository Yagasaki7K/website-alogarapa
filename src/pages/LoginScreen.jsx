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
          <li><a href="https://kalify.vercel.app" target="_blank" rel="noreferrer">Sobre a Kalify</a></li>
          <li><a href="https://discord.gg/jhSepmE7nN" target="_blank" rel="noreferrer">Suporte</a></li>
          <li><a href="mailto:kalifyinc@gmail.com">Contato</a></li>
          <button onClick={toHome}>Acessar mapa</button>
        </ul>

        <section className="container">
          <h1>Encontre uma <span className="love">GARAPA</span><br />perto de você</h1>
          <button onClick={toHome}>Explorar locais</button>

          <div className="links">
            <a href="/termos">Termos de Uso</a> - &nbsp;
            <a href="/politicas-de-privacidade">Políticas de Privacidade</a>
          </div>
        </section>
      </AppDetails>
    </>
  )
}

export default App

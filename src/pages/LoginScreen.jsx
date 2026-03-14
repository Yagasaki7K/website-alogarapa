import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import AppDetails from '../components/AppDetails'
import AppBackground from '../components/AppBackground'
import { usePwaInstall } from '../context/PwaInstallContext'

import Logo from '../images/logo.png'

const App = () => {
  const navigate = useNavigate()
  const { promptInstall } = usePwaInstall()
  const [downloadMessage, setDownloadMessage] = useState('')

  const toHome = () => {
    navigate('/dashboard')
  }

  const handleDownload = async () => {
    const result = await promptInstall()
    setDownloadMessage(result.message)
  }

  return (
    <>
      <AppBackground />
      <AppDetails>
        <ul>
          <Link to="/"><img src={Logo} alt="AlôGarapa" /></Link>
          <li><a href="https://kalify.vercel.app" target="_blank" rel="noreferrer">Sobre a Kalify</a></li>
          <li><a href="mailto:kalifyinc@gmail.com">Contato</a></li>
          <button onClick={toHome}>Acessar mapa</button>
        </ul>

        <section className="container">
          <h1>Encontre uma <span className="love">GARAPA</span><br />perto de você</h1>
          <div className="cta-row">
            <button onClick={toHome}>Explorar locais</button>
            <button className="download" onClick={handleDownload}>Download</button>
          </div>
          {downloadMessage && <p className="download-feedback">{downloadMessage}</p>}

          <div className="links">
            <Link to="/termos">Termos de Uso</Link> · <Link to="/privacidade">Política de Privacidade</Link>
          </div>
          <div className="copyright-home">© 2021–2026 AlôGarapa. Todos os direitos reservados.</div>
        </section>
      </AppDetails>
    </>
  )
}

export default App

import { React, useState } from 'react'
import NavigatorHomeDetails from '../components/NavigatorHomeDetails'
import DashboardDetails from '../components/DashboardDetails'

import Logo from '../images/logo.png'
import AddButton from '../components/AddButton'

const Dashboard = () => {
    const [garapaData, setGarapaData] = useState(null);

    return (
        <>
            <NavigatorHomeDetails>
                <div className="NavMenu">
                    <a href="/">
                        <img src={Logo} />
                    </a>

                    <a href="/sobre">Sobre AlôGarapa!</a>
                    <a href="mailto:kalifyinc@gmail.com">Cadastre seu Restaurante</a>
                    <a href="mailto:kalifyinc@gmail.com">Contato</a>
                </div>
            </NavigatorHomeDetails>
            <DashboardDetails>

                <a href="mailto:kalifyinc@gmail.com" className="advice">
                    <i className="uil uil-shield-exclamation"></i>&nbsp;Seu negócio vende caldo de cana e ele não está em nossa listagem? Envie um e-mail!&nbsp;<i className="uil uil-shield-exclamation"></i>
                </a>

                <div className="garapa-list">
                    {
                        garapaData && garapaData.map((garapa, index) => (

                            <a href={`https://wa.me/` + garapa?.contact} key={index}>
                                <div className="garapa-list-item">
                                    <img src={garapa.image.asset.url} alt={garapa?.name} />

                                    <div className="garapa-list-item-info">
                                        <h3>{garapa?.name}</h3>
                                        <p><i className="uil uil-map-marker"></i> {garapa?.location}</p>
                                        <p><i className="uil uil-phone"></i> {garapa?.contact}</p>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>

                <hr />
                <footer>
                    <div className="footer-content">
                        <h2>FindYourPet</h2>
                        <a href="http://kalify.vercel.app/" target="_blank">Site Institucional <i className="uil uil-external-link-alt"></i></a>
                        <a href="/sobre">Sobre nós</a>
                        <a href="mailto:kalifyinc@gmail.com">Fale Conosco</a>
                        <a href="/sobre#developer">Carreiras</a>
                    </div>

                    <div className="footer-content">
                        <h2>Descubra</h2>
                        <a href="mailto:kalifyinc@gmail.com">Cadastre seu negócio</a>
                        <a href="/sobre">Como funciona?</a>
                    </div>

                    <div className="footer-content">
                        <h2>Social</h2>
                        <a href="https://twitter.com/KalifyInc" target="_blank">Twitter <i className="uil uil-external-link-alt"></i></a>
                        <a href="https://instagram.com/yagasaki.dev" target="_blank">Instagram <i className="uil uil-external-link-alt"></i></a>
                    </div>
                </footer>

                <div className="copyright">
                    <i>
                        © 2018 - {new Date().getFullYear()} - Kalify Inc |
                        © {new Date().getFullYear()} - AlôGarapa</i>
                </div>
            </DashboardDetails>
            <AddButton />
        </>
    )
}

export default Dashboard
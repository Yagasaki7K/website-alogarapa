import { React, useState } from 'react'
import NavigatorHomeDetails from '../components/NavigatorHomeDetails'
import DashboardDetails from '../components/DashboardDetails'
import MapsDetails from '../components/MapsDetails'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MapStyle from '../components/MapStyle'

import 'leaflet/dist/leaflet.css'

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
                    <i className="uil uil-shield-exclamation"></i>&nbsp;Seu negócio vende caldo de cana e ele não está em nossa listagem? Solicite!&nbsp;<i className="uil uil-shield-exclamation"></i>
                </a>

                <MapsDetails>
                    <MapStyle>
                        <div layout-align="center center" style={{ background: 'white', position: 'relative' }}>
                            <MapContainer center={[-16.350, -56.666]} zoom={4} scrollWheelZoom={false} className="mapa-projeto">
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[-22.859352775021673, -47.04971628178976]}>
                                    <Popup>
                                        <h4>Restaurente de Fulano</h4>
                                        <p>Rua das Camélias, 453</p>
                                        <p>Bairro Primavera - Campinas</p>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </MapStyle>
                </MapsDetails>

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
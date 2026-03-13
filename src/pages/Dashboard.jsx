import React from 'react'
import NavigatorHomeDetails from '../components/NavigatorHomeDetails'
import DashboardDetails from '../components/DashboardDetails'
import MapsDetails from '../components/MapsDetails'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom'
import MapStyle from '../components/MapStyle'

import 'leaflet/dist/leaflet.css'

import Logo from '../images/logo.png'
import AddButton from '../components/AddButton'

const Dashboard = () => {
    return (
        <>
            <NavigatorHomeDetails>
                <div className="NavMenu">
                    <Link to="/">
                        <img src={Logo} alt="AlôGarapa" />
                    </Link>

                    <Link to="/sobre">Sobre AlôGarapa!</Link>
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
                        <div style={{ background: 'white', position: 'relative' }}>
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
                        <a href="http://kalify.vercel.app/" target="_blank" rel="noreferrer">Site Institucional <i className="uil uil-external-link-alt"></i></a>
                        <Link to="/sobre">Sobre nós</Link>
                        <a href="mailto:kalifyinc@gmail.com">Fale Conosco</a>
                        <Link to="/sobre#developer">Carreiras</Link>
                    </div>

                    <div className="footer-content">
                        <h2>Descubra</h2>
                        <a href="mailto:kalifyinc@gmail.com">Cadastre seu negócio</a>
                        <Link to="/sobre">Como funciona?</Link>
                    </div>

                    <div className="footer-content">
                        <h2>Social</h2>
                        <a href="https://twitter.com/KalifyInc" target="_blank" rel="noreferrer">Twitter <i className="uil uil-external-link-alt"></i></a>
                        <a href="https://instagram.com/yagasaki.dev" target="_blank" rel="noreferrer">Instagram <i className="uil uil-external-link-alt"></i></a>
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
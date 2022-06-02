import { React, useEffect, useState } from 'react'
import NavigatorHomeDetails from '../components/NavigatorHomeDetails'
import DashboardDetails from '../components/DashboardDetails'
import sanityClient from '../client'

const Dashboard = () => {
    const [garapaData, setGarapaData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "Garapa"]{
                    name,
                    contact,
                    location,
                    image{
                        asset->{
                            url,
                            assetId
                        },
                    }
                }`
        )
        .then((data) => setGarapaData(data))
        .catch(console.error);
    }, []);

    return (
        <>
            <NavigatorHomeDetails>
                <div className="NavMenu">
                    <a href="/">
                        <img src="/src/images/logo.png"/>
                    </a>

                    <a href="/sobre">Sobre AlôGarapa!</a>
                    <a href="/seu-restaurante">Cadastre seu Restaurante</a>
                    <a href="/contato">Contato</a>
                </div>
            </NavigatorHomeDetails>
            <DashboardDetails>

            <a href="/signup" className="advice">
                <i className="uil uil-shield-exclamation"></i>&nbsp;Seu negócio vende caldo de cana e ele não está em nossa listagem? Cadastre já!&nbsp;<i className="uil uil-shield-exclamation"></i>
            </a>

            <div className="garapa-list">
                {
                    garapaData && garapaData.map((garapa, index) => (

                        <a href={`tel:` + garapa?.contact} key={index}>
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

            <hr/>
                <footer>
                    <div className="footer-content">
                        <h2>FindYourPet</h2>
                        <a href="http://kalify.netlify.com/" target="_blank">Site Institucional <i className="uil uil-external-link-alt"></i></a>
                        <a href="/sobre-nos">Sobre nós</a>
                        <a href="/fale-conosco">Fale Conosco</a>
                        <a href="/carreiras">Carreiras</a>
                    </div>

                    <div className="footer-content">
                        <h2>Descubra</h2>
                        <a href="/signup">Cadastre seu negócio</a>
                        <a href="/como-funciona">Como funciona?</a>
                        <a href="#" target="_blank">Blog <i className="uil uil-external-link-alt"></i></a>
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
                    © 2022 - {new Date().getFullYear()} - AlôGarapa</i>
                </div>
            </DashboardDetails>
        </>
    )
}

export default Dashboard
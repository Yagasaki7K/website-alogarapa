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
            </DashboardDetails>
        </>
    )
}

export default Dashboard
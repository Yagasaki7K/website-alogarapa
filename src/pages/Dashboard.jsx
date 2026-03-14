import React, { useEffect, useMemo, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, Circle } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from 'leaflet'

import NavigatorHomeDetails from '../components/NavigatorHomeDetails'
import DashboardDetails from '../components/DashboardDetails'
import MapsDetails from '../components/MapsDetails'
import MapStyle from '../components/MapStyle'
import AddButton from '../components/AddButton'
import RestaurantSignupModal from '../components/RestaurantSignupModal'

import Logo from '../images/logo.png'
import places from '../data/places.json'
import { filterPlacesByRadius } from '../utils/geo'
import { usePwaInstall } from '../context/PwaInstallContext'

import 'leaflet/dist/leaflet.css'

const DEFAULT_CENTER = { lat: -16.35, lng: -56.666 }
const SEARCH_RADIUS_KM = 80

const juiceIcon = L.divIcon({
  className: 'juice-marker',
  html: '<span role="img" aria-label="Copo de garapa">🥤</span>',
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -30]
})

const userIcon = L.divIcon({
  className: 'user-marker',
  html: '<span role="img" aria-label="Sua localização">📍</span>',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -24]
})

const Dashboard = () => {
  const [userLocation, setUserLocation] = useState(null)
  const [locationStatus, setLocationStatus] = useState('loading')
  const [locationMessage, setLocationMessage] = useState('Solicitando sua localização...')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showPwaHint, setShowPwaHint] = useState(false)
  const [pwaFeedback, setPwaFeedback] = useState('')
  const { promptInstall, isInstalled } = usePwaInstall()

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationStatus('error')
      setLocationMessage('Seu navegador não suporta geolocalização. Exibindo mapa padrão.')
      return
    }

    const onSuccess = ({ coords }) => {
      setUserLocation({ lat: coords.latitude, lng: coords.longitude })
      setLocationStatus('success')
      setLocationMessage('Localização obtida! Mostrando locais próximos de você.')
    }

    const onError = (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        setLocationStatus('denied')
        setLocationMessage('Permissão negada. Você ainda pode navegar pelos locais no mapa.')
        return
      }

      setLocationStatus('error')
      setLocationMessage('Não foi possível obter sua localização agora. Exibindo mapa padrão.')
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000
    })
  }, [])

  useEffect(() => {
    const hasSeenHint = localStorage.getItem('alogarapa:map-install-hint') === 'true'
    if (!hasSeenHint && !isInstalled) {
      setShowPwaHint(true)
    }
  }, [isInstalled])

  const mapCenter = userLocation ?? DEFAULT_CENTER

  const visiblePlaces = useMemo(() => {
    if (!userLocation) {
      return places.map((place) => ({ ...place, distanceKm: null }))
    }

    return filterPlacesByRadius(places, userLocation, SEARCH_RADIUS_KM)
  }, [userLocation])

  const handleInstallClick = async () => {
    const result = await promptInstall()
    setPwaFeedback(result.message)
    localStorage.setItem('alogarapa:map-install-hint', 'true')
    setShowPwaHint(false)
  }

  const dismissHint = () => {
    localStorage.setItem('alogarapa:map-install-hint', 'true')
    setShowPwaHint(false)
  }

  return (
    <>
      <NavigatorHomeDetails>
        <div className="NavMenu">
          <Link to="/" className="brand">
            <img src={Logo} alt="AlôGarapa" />
          </Link>

          <div className="menu-links">
            <Link to="/sobre">Sobre AlôGarapa</Link>
            <button className="menu-button" onClick={() => setIsModalOpen(true)}>Cadastre seu restaurante</button>
            <a href="mailto:kalifyinc@gmail.com">Contato</a>
          </div>
        </div>
      </NavigatorHomeDetails>

      <DashboardDetails>
        <section className="dashboard-header">
          <h1>Encontre garapa perto de você</h1>
          <p>Explore no mapa os pontos mais próximos e descubra novos lugares para matar a sede.</p>
        </section>

        <div className={`location-status ${locationStatus}`}>
          <strong>Status da localização:</strong> {locationMessage}
        </div>

        {showPwaHint && (
          <div className="install-hint">
            <div>
              <strong>Instale o app</strong>
              <p>Adicione o AlôGarapa à tela inicial para abrir o mapa mais rápido.</p>
            </div>
            <div className="hint-actions">
              <button onClick={handleInstallClick}>Baixar app</button>
              <button className="secondary" onClick={dismissHint}>Agora não</button>
            </div>
          </div>
        )}

        {pwaFeedback && <p className="pwa-feedback">{pwaFeedback}</p>}

        <MapsDetails>
          <MapStyle>
            <div className="map-shell">
              <MapContainer center={[mapCenter.lat, mapCenter.lng]} zoom={userLocation ? 12 : 4} scrollWheelZoom className="mapa-projeto">
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {userLocation && (
                  <>
                    <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
                      <Popup>Você está aqui.</Popup>
                    </Marker>
                    <Circle center={[userLocation.lat, userLocation.lng]} radius={SEARCH_RADIUS_KM * 1000} pathOptions={{ color: '#2f6f4f', fillColor: '#6fbf8f', fillOpacity: 0.15 }} />
                  </>
                )}

                {visiblePlaces.map((place) => (
                  <Marker key={place.id} position={[place.latitude, place.longitude]} icon={juiceIcon}>
                    <Popup>
                      <div className="map-popup">
                        <h4>{place.nome}</h4>
                        <p><strong>Telefone:</strong> {place.telefone}</p>
                        <p><strong>Endereço:</strong> {place.endereco}</p>
                        <a href={place.website} target="_blank" rel="noreferrer">Acessar website</a>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </MapStyle>
        </MapsDetails>

        <section className="results-section">
          <div className="results-title-row">
            <h2>Locais disponíveis</h2>
            <span>Raio atual: {SEARCH_RADIUS_KM} km</span>
          </div>

          {visiblePlaces.length === 0 ? (
            <p className="empty-state">Não encontramos locais nesse raio. Tente ampliar o raio no código para mostrar mais pontos.</p>
          ) : (
            <div className="garapa-list">
              {visiblePlaces.map((place) => (
                <article key={place.id} className="garapa-list-item">
                  <h3>{place.nome}</h3>
                  <p>{place.endereco}</p>
                  <p>{place.telefone}</p>
                  {place.distanceKm !== null && <small>{place.distanceKm.toFixed(1)} km de você</small>}
                </article>
              ))}
            </div>
          )}
        </section>

        <hr />

        <div className="copyright compact">
          © 2021–2026 AlôGarapa. Todos os direitos reservados. · <Link to="/termos">Termos de Uso</Link> · <Link to="/privacidade">Política de Privacidade</Link>
        </div>
      </DashboardDetails>

      <AddButton onClick={() => setIsModalOpen(true)} />
      <RestaurantSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Dashboard

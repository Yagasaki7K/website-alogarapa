import styled from 'styled-components'

const MapStyle = styled.div`
  .mapa-projeto {
    height: min(70vh, 560px);
    width: 100%;
    border-radius: 12px;
  }

  .juice-marker,
  .user-marker {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }

  .juice-marker span,
  .user-marker span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    background: #fff;
    border: 2px solid #d6c959;
    box-shadow: 0 8px 16px rgba(63, 60, 28, 0.22);
    font-size: 18px;
  }

  .user-marker span {
    border-color: #4c8f6b;
  }

  .leaflet-popup-content-wrapper {
    border-radius: 12px;
    box-shadow: 0 14px 26px rgba(20, 34, 20, 0.18);
  }

  .map-popup {
    min-width: 210px;

    h4 {
      margin-bottom: 0.45rem;
      color: #253827;
      font-size: 1rem;
    }

    p {
      font-size: 0.84rem;
      margin-bottom: 0.3rem;
      color: #4a5f4d;
      line-height: 1.4;
    }

    a {
      display: inline-block;
      margin-top: 0.4rem;
      text-decoration: none;
      background: #dae77f;
      color: #253226;
      padding: 0.44rem 0.7rem;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 700;
    }
  }
`

export default MapStyle

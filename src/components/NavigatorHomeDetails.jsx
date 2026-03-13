import styled from 'styled-components'

const NavigatorHomeDetails = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);

  .NavMenu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.9rem 1.2rem;
    background: rgba(16, 27, 19, 0.86);
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }

  .brand img {
    width: clamp(8rem, 12vw, 10rem);
    display: block;
  }

  .menu-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .menu-links a,
  .menu-links .menu-button {
    color: #ecf4eb;
    text-decoration: none;
    font-size: 0.95rem;
    background: transparent;
    cursor: pointer;
  }

  .menu-links .menu-button {
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 999px;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 768px) {
    .NavMenu {
      flex-direction: column;
      align-items: flex-start;
    }

    .menu-links {
      width: 100%;
      gap: 0.6rem;
    }
  }
`

export default NavigatorHomeDetails

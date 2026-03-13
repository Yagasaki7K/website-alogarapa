import styled from 'styled-components'
import Colors from '../utils/Colors'

const HomeDetails = styled.main`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  color: #fff;
  padding: clamp(0.8rem, 2vw, 1.5rem);
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: clamp(9rem, 16vw, 12.2rem);
      display: block;
    }

    li a {
      color: #f7f7f7;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
    }

    button {
      margin-left: auto;
      background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
      color: #23301f;
      font-weight: 700;
      border-radius: 999px;
      min-height: 2.7rem;
      padding: 0 1.3rem;
      cursor: pointer;
    }
  }

  .container {
    margin: auto;
    text-align: center;
    max-width: min(900px, 100%);

    h1 {
      font-size: clamp(1.8rem, 5.8vw, 4.5rem);
      line-height: 1.12;
      text-transform: uppercase;
      margin-bottom: 1.4rem;
    }

    .love {
      background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }

    .cta-row {
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      flex-wrap: wrap;
    }

    button {
      background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
      color: #1f291c;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 999px;
      padding: 0.95rem 2rem;
      cursor: pointer;
    }

    .download {
      background: rgba(255, 255, 255, 0.92);
    }

    .download-feedback {
      margin-top: 0.8rem;
      font-size: 0.9rem;
    }

    .links {
      margin-top: clamp(2rem, 10vw, 4.4rem);
      font-size: 0.9rem;

      a {
        color: #fff;
        text-decoration: none;
      }
    }

    .copyright-home {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      opacity: 0.9;
    }
  }

  @media (max-width: 1024px) {
    ul {
      flex-wrap: wrap;

      li {
        display: none;
      }

      button {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 313px) {
    .container button {
      width: 100%;
    }
  }
`

export default HomeDetails

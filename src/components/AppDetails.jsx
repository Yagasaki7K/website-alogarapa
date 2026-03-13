import styled from 'styled-components'
import Colors from '../utils/Colors'

const HomeDetails = styled.main`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  color: #fff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: clamp(10rem, 18vw, 13rem);
      display: block;
    }

    li {
      a {
        color: #f7f7f7;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
      }
    }

    button {
      margin-left: auto;
      background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
      color: #23301f;
      font-weight: 700;
      border-radius: 999px;
      height: 2.7rem;
      width: 9.5rem;
      cursor: pointer;
    }
  }

  .container {
    margin: auto;
    text-align: center;
    max-width: 900px;

    h1 {
      font-size: clamp(2rem, 6vw, 4.5rem);
      line-height: 1.1;
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

    button {
      background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
      color: #1f291c;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 999px;
      padding: 0.95rem 2.6rem;
      cursor: pointer;
    }

    .links {
      margin-top: 5rem;
      font-size: 0.9rem;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 900px) {
    ul {
      flex-wrap: wrap;

      li {
        display: none;
      }

      button {
        margin-left: 0;
      }
    }

    .container {
      margin-top: 2rem;
    }
  }
`

export default HomeDetails

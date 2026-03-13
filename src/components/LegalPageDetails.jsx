import styled from 'styled-components'

const LegalPageDetails = styled.main`
  min-height: 100vh;
  background: linear-gradient(180deg, #f8faf7 0%, #edf5ec 100%);
  color: #213023;
  padding: 1.2rem;

  .box {
    max-width: 900px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #dbe6db;
    border-radius: 16px;
    padding: clamp(1rem, 2vw, 1.8rem);
    box-shadow: 0 10px 24px rgba(41, 57, 41, 0.08);
  }

  h1 { margin-bottom: 0.8rem; }
  h2 { margin-top: 1.2rem; margin-bottom: 0.4rem; font-size: 1.05rem; }
  p { color:#425744; line-height:1.6; font-size:0.95rem; }
  .actions { margin-top: 1.2rem; display:flex; gap:1rem; flex-wrap:wrap; }
  a { color:#2b5a37; }
`

export default LegalPageDetails

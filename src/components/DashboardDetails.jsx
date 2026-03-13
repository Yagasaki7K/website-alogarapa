import styled from 'styled-components'

const DashboardDetails = styled.main`
  min-height: calc(100vh - 72px);
  background: linear-gradient(180deg, #f7faf7 0%, #ecf3ec 100%);
  color: #203022;
  padding: 1.2rem;

  .dashboard-header {
    max-width: 1100px;
    margin: 0 auto 1rem;

    h1 {
      font-size: clamp(1.4rem, 3vw, 2.1rem);
      margin-bottom: 0.35rem;
    }

    p {
      color: #49624d;
    }
  }

  .location-status {
    max-width: 1100px;
    margin: 0 auto 1rem;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    border: 1px solid #d8e2d8;
    background: #fff;
    font-size: 0.94rem;

    &.loading {
      border-color: #c6d7ea;
      background: #f1f8ff;
    }

    &.success {
      border-color: #b8dec2;
      background: #effbf2;
    }

    &.denied,
    &.error {
      border-color: #f1ceb5;
      background: #fff7f2;
    }
  }

  .results-section {
    max-width: 1100px;
    margin: 1.2rem auto 0;
  }

  .results-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
    gap: 1rem;

    span {
      font-size: 0.9rem;
      color: #5f7462;
    }
  }

  .garapa-list {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .garapa-list-item {
    background: #fff;
    border-radius: 14px;
    padding: 1rem;
    border: 1px solid #dde8dd;
    box-shadow: 0 6px 16px rgba(46, 63, 46, 0.08);

    h3 {
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 0.9rem;
      color: #4f6353;
      margin-bottom: 0.28rem;
    }

    small {
      color: #7c8f80;
      font-weight: 600;
    }
  }

  .empty-state {
    background: #fff;
    border: 1px dashed #c8d7c8;
    color: #5b6f5e;
    border-radius: 12px;
    padding: 1rem;
  }

  footer {
    max-width: 1100px;
    margin: 1.3rem auto 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;

    .footer-content {
      display: flex;
      flex-direction: column;
      gap: 0.42rem;

      h2 {
        font-size: 1rem;
      }

      a {
        color: #2e4532;
        text-decoration: none;
        font-size: 0.93rem;
      }
    }
  }

  .copyright {
    text-align: center;
    color: #56705a;
    margin: 1.4rem 0 0.2rem;
    font-size: 0.88rem;
  }

  hr {
    max-width: 1100px;
    margin: 1.6rem auto 0;
    border-top: 1px solid #dce7dc;
  }
`

export default DashboardDetails
